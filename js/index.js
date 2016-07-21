window.addEventListener("load", function() {
  var router = new Router();

  router.addRoute("GET", "/", function() {
    window.location = "/#/notes";
  });

  new NoteController(document.getElementById("app"),
                     new NoteListModel(NoteModel),
                     NoteListView,
                     NoteView,
                     router);

  setUpSendingLocationEventsToRouter(router);
});
