/* Thank-you page (/thank-you/?f=<form>). Shows the block for that form and fires one generate_lead conversion per real submission.
   forms.js / quiz.js / the booking hook leave a short-lived sessionStorage token ("rm-lead") just before redirecting here.
   The token is consumed on first view, so a refresh, a bookmark or a shared link never counts twice. No PII in the event. */
(function () {
  var p = new URLSearchParams(location.search), f = (p.get("f") || "other").toLowerCase().replace(/[^a-z-]/g, "").slice(0, 40) || "other";
  var blocks = Array.prototype.slice.call(document.querySelectorAll("[data-thx]"));
  var pick = blocks.filter(function (b) { return b.getAttribute("data-thx") === f; })[0] || blocks.filter(function (b) { return b.getAttribute("data-thx") === "other"; })[0];
  if (pick) {
    blocks.forEach(function (b) { b.hidden = b !== pick; });
    var h = document.querySelector("[data-thx-h1]"), l = document.querySelector("[data-thx-lede]");
    if (h && pick.getAttribute("data-h1")) h.textContent = pick.getAttribute("data-h1");
    if (l && pick.getAttribute("data-lede")) l.textContent = pick.getAttribute("data-lede");
  }

  var tok = null, usable = true;
  try {
    var raw = window.sessionStorage.getItem("rm-lead");
    window.sessionStorage.removeItem("rm-lead");
    if (raw) { tok = JSON.parse(raw); }
  } catch (e) { usable = false; }

  // Quiz: show the score the visitor saw before the form (stored by quiz.js: title, score, band, page). No financial values.
  var q = null;
  try { q = JSON.parse(window.sessionStorage.getItem("rm-quiz") || "null"); } catch (e) {}
  var box = document.querySelector("[data-thx-quiz]");
  if (box && q && f === "quiz" && q.title && typeof q.score !== "undefined") {
    var a = document.createElement("a"); a.href = /^\/[a-z0-9-]+\/$/.test(q.page || "") ? q.page : "/mortgage-check/"; a.textContent = "Back to the quiz";
    box.textContent = "Your result: " + q.title + ", score " + q.score + (q.band ? ", " + q.band : "") + ". ";
    box.appendChild(a); box.hidden = false;
  }

  // One conversion per real submission. If storage is blocked we cannot de-duplicate, so we fire once for this view.
  var fresh = tok && tok.f === f && Date.now() - (tok.t || 0) < 600000;
  if (fresh || (!usable && p.get("f"))) {
    var params = { form: f, page: location.pathname };
    try {
      if (window.gtag) window.gtag("event", "generate_lead", params);
      else (window.dataLayer = window.dataLayer || []).push({ event: "generate_lead", form: f, page: location.pathname });
    } catch (e) {}
  }
})();
