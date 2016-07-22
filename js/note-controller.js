;(function(exports) {
  function NoteController(appElement, noteListModel, NoteListView, NoteView, router) {
    this._appElement = appElement;
    this._noteListModel = noteListModel;
    this._NoteListView = NoteListView;
    this._NoteView = NoteView;
    this._router = router;

    this._setUpRoutes();
  };

  NoteController.prototype = {
    _setUpRoutes: function() {
      var self = this;

      this._router
        .addRoute("GET", "/#/notes/\\d+", function(event) {
          var noteModel = self._findNoteFromUrl(window.location);
          self._renderNote(noteModel);
        })
        .addRoute("GET", "/#/notes", function() {
          self._renderNoteList();
        })
        .addRoute("POST", "/#/notes", function(event) {
          self._createNote(event);
          self._renderNoteList();
        })
    },

    _renderHtml: function(html) {
      this._appElement.innerHTML = html;
    },

    _renderNoteList: function() {
      this._renderHtml(new this._NoteListView(this._noteListModel).toHtml());
    },

    _renderNote: function(noteModel) {
      this._renderHtml(new this._NoteView(noteModel).toHtml());
    },

    _findNoteFromUrl: function(url) {
      return this._noteListModel.findById(this._getNoteIdFromUrl(url));
    },

    _createNote: function(event) {
      this._noteListModel.create(event.target.elements.title.value);
    },

    _getNoteIdFromUrl: function(url) {
      return url.hash.match(/(\d+)$/)[1];
    }
  };

  exports.NoteController = NoteController;
})(this);
