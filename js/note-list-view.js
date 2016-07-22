"use strict";

;(function(exports) {
  function NoteListView(noteListModel) {
    this._noteListModel = noteListModel;
  };

  NoteListView.prototype = {
    toHtml: function() {
      return noteListModelToHtml(this._noteListModel);
    }
  };

  function createNoteModelPresenter(noteModel) {
    return {
      title: noteModel.title(),
      url: "/#/notes/" + noteModel.id()
    }
  };

  function noteListModelToHtml(noteListModel) {
    return [
      "<form action='/#/notes' method='post'>",
        "Title: <input id='title' name='title' />",
        "<input type='submit' id='create' name='create' value='Create'>",
      "</form>",

      "<div id='notes'>",
        noteListModel.all().map(noteModelToHtml),
      "</div>"
    ].join("");
  };

  function noteModelToHtml(noteModel) {
    var noteModelPresenter = createNoteModelPresenter(noteModel);
    return [
      "<div class='note'>",
        "<span class='title'>",
          "<a href='", noteModelPresenter.url, "'>",
            noteModelPresenter.title,
          "</a>",
        "</span> ",
      "</div>"
    ].join("");
  };

  exports.NoteListView = NoteListView;
})(this);
