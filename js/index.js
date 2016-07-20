window.addEventListener("load", function() {
  var router = new Router();

  router.addRoute("GET", "/", function() {
    window.location = "/#/notes";
  });

  sendLocationEventsToRouter(router);

  var noteListModel = new NoteListModel();
  new NoteController(document.getElementById("notes"),
                     noteListModel,
                     new NoteListView(noteListModel, Mustache),
                     router);
});
