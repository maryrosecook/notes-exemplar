;(function(exports) {
  function sendLocationEventsToRouter(router) {
    window.addEventListener("submit", function(event) {
      event.preventDefault();
      router.sendRequest(event.target.method, event.target.action, event);
    });

    window.addEventListener("hashchange", function(event) {
      router.sendRequest("GET", window.location, event);
    });

    router.sendRequest("GET", window.location);
  };

  exports.sendLocationEventsToRouter = sendLocationEventsToRouter;
})(this);
