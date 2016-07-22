"use strict";

window.addEventListener("load", function() {
  var router = new Router();
  proxyNavigationEventsToRouter(window, router);

  router.addRoute("GET", "/", function() {
    window.location = "/#/notes";
  });

  new NoteController(document.getElementById("app"),
                     new NoteListModel(NoteModel),
                     NoteListView,
                     NoteView,
                     router);

  router.sendRequest("GET", window.location);
});
