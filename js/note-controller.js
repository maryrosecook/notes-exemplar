;(function(exports) {
  function NoteController(notesElement, noteListModel, noteListView, router) {
    this._notesElement = notesElement;
    this._noteListModel = noteListModel;
    this._noteListView = noteListView;
    this._router = router;

    this._setUpRoutes();
  };

  NoteController.prototype = {
    _setUpRoutes: function() {
      this._router
        .addRoute("GET", "/#/notes", this.render.bind(this));
    },

    render: function() {
      this._notesElement.innerHTML = this._noteListView.toHtml();
    }
  };

  exports.NoteController = NoteController;
})(this);
