window.addEventListener("load", function() {
  var router = new Router();

  router.addRoute("GET", "/", function() {
    window.location = "/#/notes";
  });

  var noteListModel = new NoteListModel(NoteModel);
  new NoteController(document.getElementById("app"),
                     noteListModel,
                     new NoteListView(noteListModel, Mustache),
                     NoteView,
                     router);

  setUpSendingLocationEventsToRouter(router);
});
