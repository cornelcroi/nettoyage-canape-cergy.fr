(function () {
  function track(eventName, details) {
    if (window.gtag) {
      window.gtag("event", eventName, details || {});
    }

    if (window.plausible) {
      window.plausible(eventName, { props: details || {} });
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-track]");
    if (!target) return;

    track("cta_click", {
      id: target.getAttribute("data-track"),
      text: target.textContent.trim()
    });
  });

  document.addEventListener("submit", function (event) {
    var form = event.target.closest("[data-track-form]");
    if (!form) return;

    track("lead_form_submit", {
      id: form.getAttribute("data-track-form")
    });
  });
})();
