(() => {
  const loginLinks = [...document.querySelectorAll("[data-auth-login]")];
  const userBoxes = [...document.querySelectorAll("[data-auth-user]")];
  if (!loginLinks.length && !userBoxes.length) return;
  fetch("/api/auth/me", { credentials: "same-origin", cache: "no-store" })
    .then((response) => response.ok ? response.json() : Promise.reject())
    .then((result) => {
      if (!result.authenticated) return;
      loginLinks.forEach((element) => { element.hidden = true; });
      userBoxes.forEach((element) => {
        const name = element.querySelector("[data-auth-name]");
        if (name) name.textContent = result.user.username || result.user.email || "Mon compte";
        element.hidden = false;
      });
    })
    .catch(() => {});
})();
