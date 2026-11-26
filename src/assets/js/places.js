/*
 * Address suggestions for the application's property field (Nov 25, 2026).
 * Loads only on /apply/ and only when GOOGLE_MAPS_KEY is set at build time (data-key on the script tag).
 * Uses Places API (New): Autocomplete while typing, then Place Details (formattedAddress only) on pick.
 * One session token covers the typing and the pick, so Google bills it as one session.
 * If anything fails, the field stays a plain text box. People can still type an area instead of an address.
 */
(function () {
  var s = document.currentScript, KEY = s && s.getAttribute("data-key");
  var input = document.getElementById("a-address");
  if (!KEY || !input || !window.fetch) return;

  var API = "https://places.googleapis.com/v1/";
  var token = newToken(), items = [], active = -1, timer = null, seq = 0;

  function newToken() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "t" + Date.now() + Math.random().toString(16).slice(2);
  }

  var wrap = input.parentNode; wrap.classList.add("ac-wrap");
  var list = document.createElement("ul");
  list.id = "a-address-list"; list.className = "ac-list"; list.setAttribute("role", "listbox"); list.hidden = true;
  wrap.appendChild(list);
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-controls", list.id);
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("autocomplete", "off");

  function close() { list.hidden = true; list.innerHTML = ""; items = []; active = -1; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); }

  function render() {
    list.innerHTML = "";
    if (!items.length) { close(); return; }
    items.forEach(function (it, i) {
      var li = document.createElement("li");
      li.id = "a-address-opt-" + i; li.setAttribute("role", "option"); li.className = "ac-opt" + (i === active ? " is-active" : "");
      li.setAttribute("aria-selected", i === active ? "true" : "false");
      var main = document.createElement("span"); main.className = "ac-main"; main.textContent = it.main;
      li.appendChild(main);
      if (it.sub) { var sub = document.createElement("span"); sub.className = "ac-sub"; sub.textContent = it.sub; li.appendChild(sub); }
      li.addEventListener("mousedown", function (e) { e.preventDefault(); pick(i); });
      list.appendChild(li);
    });
    var by = document.createElement("li"); by.className = "ac-by"; by.setAttribute("aria-hidden", "true"); by.textContent = "Powered by Google";
    list.appendChild(by);
    list.hidden = false; input.setAttribute("aria-expanded", "true");
    if (active >= 0) input.setAttribute("aria-activedescendant", "a-address-opt-" + active); else input.removeAttribute("aria-activedescendant");
  }

  function suggest(q) {
    var mine = ++seq;
    fetch(API + "places:autocomplete", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY },
      body: JSON.stringify({
        input: q, sessionToken: token, languageCode: "en", includedRegionCodes: ["ca"],
        // Lean toward British Columbia without ruling out the rest of Canada.
        locationBias: { rectangle: { low: { latitude: 48.2, longitude: -139.1 }, high: { latitude: 60.0, longitude: -114.0 } } }
      })
    }).then(function (r) { return r.ok ? r.json() : { suggestions: [] }; }).then(function (d) {
      if (mine !== seq) return;
      items = (d.suggestions || []).filter(function (x) { return x.placePrediction; }).slice(0, 5).map(function (x) {
        var p = x.placePrediction, f = p.structuredFormat || {};
        return { id: p.placeId, text: (p.text && p.text.text) || "", main: (f.mainText && f.mainText.text) || (p.text && p.text.text) || "", sub: (f.secondaryText && f.secondaryText.text) || "" };
      });
      active = -1; render();
    }).catch(close);
  }

  function clean(a) { return String(a || "").replace(/,\s*Canada$/, ""); }

  function pick(i) {
    var it = items[i]; if (!it) return;
    input.value = clean(it.text);
    close();
    var t = token; token = newToken(); // the pick ends this session
    fetch(API + "places/" + encodeURIComponent(it.id) + "?sessionToken=" + encodeURIComponent(t), {
      headers: { "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": "formattedAddress" }
    }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (d && d.formattedAddress) input.value = clean(d.formattedAddress);
    }).catch(function () {});
    input.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
  }

  input.addEventListener("input", function (e) {
    if (!e.isTrusted) return; // our own event after a pick
    clearTimeout(timer);
    var q = input.value.trim();
    if (q.length < 3) { seq++; close(); return; }
    timer = setTimeout(function () { suggest(q); }, 250);
  });
  input.addEventListener("keydown", function (e) {
    if (list.hidden) return;
    if (e.key === "ArrowDown") { e.preventDefault(); active = (active + 1) % items.length; render(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); active = (active - 1 + items.length) % items.length; render(); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); pick(active); }
    else if (e.key === "Escape") { close(); }
  });
  input.addEventListener("blur", function () { setTimeout(close, 150); });
})();
