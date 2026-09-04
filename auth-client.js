(() => {
  const loginLinks = [...document.querySelectorAll("[data-auth-login]")];
  const userBoxes = [...document.querySelectorAll("[data-auth-user]")];
  fetch("/api/auth/me", { credentials: "same-origin", cache: "no-store" })
    .then((response) => response.ok ? response.json() : Promise.reject())
    .then((result) => {
      const accountType = result.authenticated ? result.user.accountType || "NORMAL" : "NORMAL";
      document.documentElement.dataset.accountType = accountType;
      window.dispatchEvent(new CustomEvent("boxorbust:auth-ready", { detail: result }));
      if (!result.authenticated) return;
      loginLinks.forEach((element) => { element.hidden = true; });
      userBoxes.forEach((element) => {
        const name = element.querySelector("[data-auth-name]");
        if (name) name.textContent = result.user.username || result.user.email || "Mon compte";
        element.hidden = false;
      });
    })
    .catch(() => {
      document.documentElement.dataset.accountType = "NORMAL";
      window.dispatchEvent(new CustomEvent("boxorbust:auth-ready", {
        detail: { authenticated: false }
      }));
    });
})();
