;(function(exports) {
  function proxyNavigationEventsToRouter(window, router) {
    window.addEventListener("submit", function(event) {
      event.preventDefault();
      router.sendRequest(event.target.method, event.target.action, event);
    });

    window.addEventListener("hashchange", function(event) {
      router.sendRequest("GET", window.location, event);
    });
  };

  exports.proxyNavigationEventsToRouter = proxyNavigationEventsToRouter;
})(this);
