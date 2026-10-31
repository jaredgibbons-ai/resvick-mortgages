/* Lead form handler: posts JSON to /api/lead (contract in docs/LEAD-CONTRACT.md). No uploads. No financial values in analytics.
   Handles every form[data-lead] on the page, optional multi-step forms ([data-steps], one fieldset per step, progress saved
   in localStorage), and click-to-load cal.com embeds ([data-book-load], with an optional data-book-url). */
(function () {
  var EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  var FALLBACK = "That did not send. Please call 778.882.5674 or email joshua@resvickmortgages.com and Joshua will pick it up directly.";
  function utm() { var o = {}, p = new URLSearchParams(location.search); ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (k) { if (p.get(k)) o[k] = p.get(k); }); return o; }
  function val(d, k) { return (d.get(k) || "").toString().trim(); }
  // Leave a short-lived token so /thank-you/ counts exactly one conversion, then go there. If navigation is blocked, the in-page success message stays.
  function goThanks(kind) {
    try { window.sessionStorage.setItem("rm-lead", JSON.stringify({ f: kind, t: Date.now() })); } catch (x) {}
    try { location.assign("/thank-you/?f=" + encodeURIComponent(kind)); } catch (x) {}
  }
  window.RMGoThanks = goThanks;
  function store(key, fn) { try { return fn(window.localStorage, key); } catch (x) { return null; } }

  // Fields named x_<something> travel in `extra` (flat, short strings). Everything else is the standard contract.
  function extras(f) {
    var o = {}, n = 0;
    Array.prototype.forEach.call(f.elements, function (el) {
      if (!el.name || el.name.indexOf("x_") !== 0 || n >= 30) return;
      if (el.type === "checkbox") { if (el.checked) { o[el.name.slice(2)] = el.value === "on" ? true : el.value.slice(0, 120); n++; } return; }
      if (el.type === "radio") { if (el.checked) { o[el.name.slice(2)] = el.value.slice(0, 120); n++; } return; }
      var v = (el.value || "").toString().trim(); if (v) { o[el.name.slice(2)] = v.slice(0, 120); n++; }
    });
    return n ? o : null;
  }

  function wireForm(f) {
    var msg = f.querySelector(".form-msg"), kind = f.getAttribute("data-lead");
    var stepsOn = f.hasAttribute("data-steps"), steps = stepsOn ? Array.prototype.slice.call(f.querySelectorAll("fieldset[data-step]")) : [], cur = 0;
    var saveKey = f.getAttribute("data-save");

    function setMsg(text, err) { if (!msg) return; msg.className = err ? "form-msg err" : "form-msg"; msg.textContent = text; }
    function firstInvalid(scope) {
      var bad = null;
      Array.prototype.some.call(scope.querySelectorAll("input,select,textarea"), function (el) {
        if (el.disabled || el.closest(".hp")) return false;
        var v = (el.value || "").toString().trim();
        if (el.type === "radio") { if (el.required && !scope.querySelector('input[name="' + el.name + '"]:checked')) { bad = el; return true; } return false; }
        if (el.type === "checkbox") { if (el.required && !el.checked) { bad = el; return true; } return false; }
        if (el.required && !v) { bad = el; return true; }
        if (el.type === "email" && v && !EMAIL.test(v)) { bad = el; return true; }
        if (el.type === "number" && v && isNaN(Number(v))) { bad = el; return true; }
        return false;
      });
      return bad;
    }
    function labelFor(el) {
      var c = el.closest(".choice"), q = c && c.querySelector(".choice-q"); if (q) return q.textContent.trim().replace(/[?.]$/, "");
      var l = el.id && f.querySelector('label[for="' + el.id + '"]'); if (l) return l.textContent.trim();
      var fs = el.closest("fieldset"), lg = fs && fs.querySelector("legend"); return lg ? lg.textContent.trim() : "this field";
    }
    function errText(el) { if (el.getAttribute("data-msg")) return el.getAttribute("data-msg"); return el.type === "checkbox" ? "Please tick the required box." : "Please complete " + labelFor(el).replace(/^./, function (c) { return c.toLowerCase(); }) + "."; }

    // Multi-step: show one step, keep progress, build the review list.
    function show(i) {
      cur = Math.max(0, Math.min(i, steps.length - 1));
      steps.forEach(function (s, j) { s.hidden = j !== cur; });
      var p = f.querySelector("[data-progress]"); if (p) { p.textContent = "Step " + (cur + 1) + " of " + steps.length; var bar = f.querySelector("[data-bar]"); if (bar) bar.style.width = Math.round(((cur + 1) / steps.length) * 100) + "%"; }
      var back = f.querySelector("[data-back]"); if (back) back.hidden = cur === 0;
      var next = f.querySelector("[data-next]"), submit = f.querySelector("button[type=submit]");
      if (next) next.hidden = cur === steps.length - 1; if (submit) submit.hidden = cur !== steps.length - 1;
      if (cur === steps.length - 1) review();
      setMsg("", false);
      try { steps[cur].scrollIntoView({ block: "start", behavior: "smooth" }); } catch (x) {}
      var h = steps[cur].querySelector("legend"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    }
    function review() {
      var box = f.querySelector("[data-review]"); if (!box) return;
      var rows = [];
      steps.slice(0, -1).forEach(function (s) {
        Array.prototype.forEach.call(s.querySelectorAll("input,select,textarea"), function (el) {
          if (el.closest(".hp") || el.type === "hidden") return;
          var v = "";
          if (el.type === "radio") { if (!el.checked) return; v = el.labels && el.labels[0] ? el.labels[0].textContent.trim() : el.value; }
          else if (el.type === "checkbox") { if (!el.checked) return; v = "Yes"; }
          else if (el.tagName === "SELECT") { v = el.options[el.selectedIndex] ? el.options[el.selectedIndex].textContent.trim() : ""; }
          else v = (el.value || "").toString().trim();
          if (!v) return;
          var lab = labelFor(el);
          rows.push("<div><dt>" + esc(lab) + "</dt><dd>" + esc(v) + "</dd></div>");
        });
      });
      box.innerHTML = rows.length ? "<dl>" + rows.join("") + "</dl>" : "<p class='small'>Nothing filled in yet. Use Back to add your details.</p>";
    }
    function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function save() { if (!saveKey) return; var o = {}; Array.prototype.forEach.call(f.elements, function (el) { if (!el.name || el.closest(".hp")) return; if (el.type === "checkbox" || el.type === "radio") { if (el.checked) o[el.name + "=" + el.value] = 1; } else if (el.value) o[el.name] = el.value; }); store(saveKey, function (ls, k) { ls.setItem(k, JSON.stringify({ step: cur, v: o, t: Date.now() })); }); }
    function restore() {
      if (!saveKey) return;
      var raw = store(saveKey, function (ls, k) { return ls.getItem(k); }); if (!raw) return;
      try { var d = JSON.parse(raw); if (!d || Date.now() - d.t > 14 * 86400000) return; Array.prototype.forEach.call(f.elements, function (el) { if (!el.name) return; if (el.type === "checkbox" || el.type === "radio") el.checked = !!d.v[el.name + "=" + el.value]; else if (d.v[el.name] != null) el.value = d.v[el.name]; }); if (typeof d.step === "number") cur = Math.max(0, Math.min(d.step, steps.length - 1)); var note = f.querySelector("[data-restored]"); if (note && Object.keys(d.v).length) note.hidden = false; } catch (x) {}
    }
    function clearSaved() { if (saveKey) store(saveKey, function (ls, k) { ls.removeItem(k); }); }

    if (stepsOn) {
      restore();
      f.addEventListener("click", function (e) {
        var t = e.target.closest("[data-next],[data-back],[data-restart]"); if (!t) return;
        e.preventDefault();
        if (t.hasAttribute("data-back")) { show(cur - 1); save(); return; }
        if (t.hasAttribute("data-restart")) { saveKey = null; f.reset(); store(f.getAttribute("data-save"), function (ls, k) { ls.removeItem(k); }); show(0); return; }
        var bad = firstInvalid(steps[cur]);
        if (bad) { setMsg(errText(bad), true); bad.focus(); return; }
        show(cur + 1); save();
      });
      f.addEventListener("change", function () { save(); showIf(); });
      f.addEventListener("input", function () { save(); });
      showIf();
      show(cur);
    }
    // Conditional blocks: [data-show-if="name=value"] shows when that radio/select matches.
    function showIf() {
      Array.prototype.forEach.call(f.querySelectorAll("[data-show-if]"), function (el) {
        var rule = el.getAttribute("data-show-if").split("="), name = rule[0], want = rule[1];
        var ctl = f.querySelector('[name="' + name + '"]:checked') || f.querySelector('select[name="' + name + '"]');
        var have = ctl ? ctl.value : "";
        var on = want.split("|").indexOf(have) >= 0;
        el.hidden = !on;
        Array.prototype.forEach.call(el.querySelectorAll("[data-required]"), function (c) { c.required = on; });
      });
    }
    if (!stepsOn) { f.addEventListener("change", showIf); showIf(); }

    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(f);
      if (d.get("website")) return;
      var scope = stepsOn ? steps[cur] : f;
      var bad = firstInvalid(scope);
      if (bad) { setMsg(errText(bad), true); bad.focus(); return; }
      var name = val(d, "name"), email = val(d, "email");
      if (kind === "renewal-reminder" && d.get("consent_reminders") !== "on") { setMsg("Please tick the box to agree to receive the two reminder emails.", true); return; }
      if (kind === "refer" && d.get("consent_referee") !== "on") { setMsg("Please confirm the person you are referring has agreed to be contacted.", true); return; }
      if (!name || !EMAIL.test(email)) { setMsg("Please enter your name and a valid email address.", true); return; }
      var btn = f.querySelector("button[type=submit]"); btn.disabled = true; setMsg("Sending...", false);
      var ti = null; if (d.get("include_estimate") === "on" && d.get("tool_inputs")) { try { ti = JSON.parse(d.get("tool_inputs")); } catch (x) { ti = null; } }
      var body = { tool_inputs: ti, extra: extras(f), name: name, email: email, phone: val(d, "phone"), intent: d.get("intent") || "other", timeline: val(d, "timeline"), message: val(d, "message"),
        consent_enquiry: true, consent_reminders: d.get("consent_reminders") === "on", consent_marketing: d.get("consent_marketing") === "on", consent_referee: d.get("consent_referee") === "on",
        current_lender: val(d, "current_lender"), source_page: location.pathname, utm: utm(), submitted_at: new Date().toISOString(), form: kind };
      fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        .then(function (r) { if (!r.ok) throw new Error("bad"); f.reset(); clearSaved();
          var done = f.getAttribute("data-success") || "Thank you. Joshua will reply personally.";
          var panel = f.querySelector("[data-done]");
          if (panel) { Array.prototype.forEach.call(f.children, function (c) { if (c !== panel) c.hidden = true; }); panel.hidden = false; try { panel.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (x) {} } else setMsg(done, false);
          if (window.RMTrack) window.RMTrack(kind === "renewal-reminder" ? "reminder_signup" : "form_submit", { page: location.pathname, intent: body.intent, form: kind });
          // Tool-result forms (data-stay) keep the visitor on their result and count the lead in place. Everything else goes to /thank-you/.
          if (f.hasAttribute("data-stay")) { if (window.RMTrack) window.RMTrack("generate_lead", { form: kind, page: location.pathname }); }
          else goThanks(kind); })
        .catch(function () { setMsg(FALLBACK, true); })
        .then(function () { btn.disabled = false; });
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll("form[data-lead]"), wireForm);

  // cal.com embeds load only on request (never render-blocking). data-book-url overrides the default 15-minute event.
  Array.prototype.forEach.call(document.querySelectorAll("[data-book-load]"), function (b) {
    b.addEventListener("click", function () {
      var h = document.getElementById(b.getAttribute("data-book-frame") || "book-frame"); if (!h) return;
      var url = b.getAttribute("data-book-url") || "https://cal.com/resvickmortgages/mortgage-advice";
      var title = b.getAttribute("data-book-title") || "Book a 15-minute call with Joshua Resvick";
      h.innerHTML = '<iframe src="' + url + (url.indexOf("?") > 0 ? "&" : "?") + 'embed=true&layout=month_view" title="' + title.replace(/"/g, "") + '" width="100%" height="680" style="border:0;border-radius:14px" loading="lazy"></iframe>';
      b.hidden = true; if (window.RMTrack) window.RMTrack("book_call_click", { page: location.pathname, via: "embed" });
      listenBooking(h);
    });
  });
  // Cal.com posts a "bookingSuccessful" message from its embed iframe when a booking is confirmed. Matching is deliberately loose
  // (type, data.type or method) because the exact envelope can change; the origin must be cal.com. Fires once per page view.
  var booked = false;
  function listenBooking(host) {
    window.addEventListener("message", function (e) {
      if (booked || !/^https:\/\/([a-z0-9-]+\.)*cal\.com$/.test(e.origin || "")) return;
      var d = e.data, tag = "";
      try { tag = typeof d === "string" ? d : [d && d.type, d && d.data && d.data.type, d && d.method, d && d.action, d && d.eventName].join(" "); } catch (x) {}
      if (!/bookingSuccessful/i.test(tag)) return;
      booked = true; goThanks("booking");
    });
  }
})();
