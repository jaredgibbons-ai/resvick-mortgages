/* Spam check for lead forms (Cloudflare Turnstile, "interaction-only": invisible unless Cloudflare needs more proof).
   Loaded only when TURNSTILE_SITE_KEY is set at build time. The Cloudflare script is requested when a visitor first touches a form,
   never on page load. RMGuard.get(form) resolves with a token, or "" if none arrives within 4 seconds (the server then decides). */
(function () {
  var key = document.currentScript && document.currentScript.getAttribute("data-key");
  if (!key) return;
  var loading = null, state = new WeakMap();
  function load() {
    if (loading) return loading;
    loading = new Promise(function (res) {
      var s = document.createElement("script"); s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; s.async = true;
      s.onload = function () { res(window.turnstile); }; s.onerror = function () { res(null); };
      document.head.appendChild(s);
    });
    return loading;
  }
  function mount(form) {
    if (state.has(form)) return state.get(form);
    var st = { token: "", waiters: [], id: null }; state.set(form, st);
    load().then(function (ts) {
      if (!ts) return flush(st);
      var box = document.createElement("div"); box.className = "ts-box"; form.appendChild(box);
      st.id = ts.render(box, { sitekey: key, appearance: "interaction-only", callback: function (t) { st.token = t; flush(st); }, "expired-callback": function () { st.token = ""; }, "error-callback": function () { flush(st); } });
    });
    return st;
  }
  function flush(st) { var w = st.waiters.splice(0); w.forEach(function (fn) { fn(st.token); }); }
  document.addEventListener("focusin", function (e) { var f = e.target.closest && e.target.closest("form[data-lead], [data-quiz] form"); if (f) mount(f); });
  document.addEventListener("pointerdown", function (e) { var f = e.target.closest && e.target.closest("form[data-lead], [data-quiz] form"); if (f) mount(f); });
  window.RMGuard = {
    get: function (form) {
      var st = mount(form);
      return new Promise(function (resolve) {
        if (st.token) return resolve(st.token);
        var done = false, t = setTimeout(function () { if (!done) { done = true; resolve(""); } }, 4000);
        st.waiters.push(function (tok) { if (!done) { done = true; clearTimeout(t); resolve(tok); } });
      });
    },
    reset: function (form) { var st = state.get(form); if (st && st.id != null && window.turnstile) { st.token = ""; try { window.turnstile.reset(st.id); } catch (x) {} } }
  };
})();
