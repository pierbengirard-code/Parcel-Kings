(() => {
  let revision = 0, enabled = false, timer = null, writing = false, queued = false;
  const saveLocally = save;
  const snapshot = () => JSON.parse(JSON.stringify(state));

  async function api(path, options = {}) {
    const response = await fetch(path, {
      credentials: "same-origin", cache: "no-store", ...options,
      headers: { "Content-Type": "application/json", ...(options.headers || {}) }
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(result.error || "Synchronisation impossible.");
      error.status = response.status; error.result = result; throw error;
    }
    return result;
  }

  function installState(nextState, message) {
    state = hydrateSave(nextState);
    if (state.dailyDate !== today()) state.dailyClaimed = false;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch {}
    writeBackup(snapshot()); updateAll(); checkCollectionBadges();
    if (message) toast(message);
  }

  async function writeCloud() {
    if (!enabled) return;
    if (writing) { queued = true; return; }
    writing = true;
    try {
      const current = snapshot();
      const result = await api("/api/player/save", {
        method: "PUT",
        body: JSON.stringify({ revision, saveVersion: current.saveVersion || SAVE_VERSION, state: current })
      });
      revision = Number(result.save.revision);
    } catch (error) {
      if (error.status === 409 && error.result?.save) {
        revision = Number(error.result.save.revision);
        queued = false;
        installState(error.result.save.state, "Une progression plus récente a été restaurée.");
      } else console.warn("Sauvegarde en ligne indisponible", error);
    } finally {
      writing = false;
      if (queued) { queued = false; setTimeout(writeCloud, 250); }
    }
  }

  function scheduleCloudSave() {
    if (!enabled) return;
    clearTimeout(timer);
    timer = setTimeout(() => { timer = null; writeCloud(); }, 700);
  }

  save = function cloudAwareSave() { saveLocally(); scheduleCloudSave(); };

  async function refreshCloud() {
    if (!enabled || writing || queued || timer || document.hidden) return;
    try {
      const result = await api("/api/player/save");
      const remote = result.save;
      if (!remote || Number(remote.revision) === revision) return;
      revision = Number(remote.revision);
      installState(remote.state, "Progression mise à jour depuis un autre appareil.");
    } catch (error) {
      if (error.status !== 401) console.warn("Actualisation de la progression impossible", error);
    }
  }

  async function initialize() {
    try {
      const me = await api("/api/auth/me");
      if (!me.authenticated) return;
      const result = await api("/api/player/save");
      const remote = result.save;
      if (!remote) {
        enabled = true; await writeCloud();
        toast("Progression de cet appareil associée à ton compte."); return;
      }
      revision = Number(remote.revision);
      const localTime = Number(state.savedAt) || 0;
      const remoteTime = Number(remote.state?.savedAt) || 0;
      if (remoteTime > localTime) installState(remote.state, "Progression du compte restaurée.");
      else if (localTime > remoteTime) {
        const useLocal = window.confirm("La progression de cet appareil est plus récente que celle du compte. L’importer dans le compte ?");
        if (!useLocal) installState(remote.state, "Progression du compte restaurée.");
      }
      enabled = true;
      if ((Number(state.savedAt) || 0) > remoteTime) await writeCloud();
    } catch (error) {
      if (error.status !== 401) console.warn("Initialisation de la sauvegarde en ligne impossible", error);
    }
  }

  window.addEventListener("boxorbust:local-save-ready", initialize, { once: true });
  window.addEventListener("focus", refreshCloud);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshCloud(); });
  setInterval(refreshCloud, 10_000);
  window.addEventListener("pagehide", () => { if (enabled && !writing) writeCloud(); });
})();
