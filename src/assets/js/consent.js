/* Cookie notice. Google Analytics loads only after the visitor taps Accept. Decline (or no answer) means it never loads.
   The choice is kept in this browser's localStorage under "rm-consent". The footer "Cookie settings" button reopens the notice. */
(function () {
  var s = document.currentScript, id = s && s.getAttribute("data-ga"), KEY = "rm-consent";
  if (!id) return;
  var box = document.getElementById("cookie-notice");
  function get() { try { return window.localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { window.localStorage.setItem(KEY, v); } catch (e) {} }
  function load() {
    if (window.__rmGa) return; window.__rmGa = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date()); window.gtag("config", id, { anonymize_ip: true });
    var g = document.createElement("script"); g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(g);
  }
  function show() { if (box) { box.hidden = false; } }
  function hide() { if (box) box.hidden = true; }
  var v = get();
  if (v === "granted") load(); else if (v !== "denied") show();
  if (box) box.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-consent]"); if (!t) return;
    if (t.getAttribute("data-consent") === "accept") { set("granted"); load(); } else { set("denied"); }
    hide();
  });
  document.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("[data-cookie-settings]")) show(); });
})();
