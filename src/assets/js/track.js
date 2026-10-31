/* Analytics events (GA4 under Josh's account — measurement ID set at launch). Parameters carry page/tool/intent only; never PII or financial values. */
(function () {
  function send(name, params) {
    try {
      if (window.gtag) window.gtag("event", name, params || {});
      else { var o = { event: name }, k; for (k in (params || {})) o[k] = params[k]; (window.dataLayer = window.dataLayer || []).push(o); }
    } catch (e) {}
  }
  window.RMTrack = send;
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-evt]");
    if (a) send(a.getAttribute("data-evt"), { page: location.pathname });
  });
})();
