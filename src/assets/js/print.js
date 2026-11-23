/* "Print this page" buttons on guides and checklists. The print stylesheet hides menus, forms and the footer. */
(function () {
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-print-page]"); if (!b) return;
    if (window.RMTrack) window.RMTrack("print_page", { page: location.pathname });
    try { window.print(); } catch (x) {}
  });
})();
