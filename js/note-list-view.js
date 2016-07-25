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
      textBeginning: noteModel.text().slice(0, 20),
      url: "/#/notes/" + noteModel.id()
    }
  };

  function noteListModelToHtml(noteListModel) {
    return [
      "<form action='/#/notes' method='post'>",
        "<textarea id='text' name='text'></textarea>",
        "<input type='submit' id='create' name='create' value='Create'>",
      "</form>",

      "<div id='notes'>",
        noteListModel.all().map(noteModelToHtml).join(""),
      "</div>"
    ].join("");
  };

  function noteModelToHtml(noteModel) {
    var noteModelPresenter = createNoteModelPresenter(noteModel);
    return [
      "<div class='note'>",
        "<span class='text'>",
          "<a href='", noteModelPresenter.url, "'>",
            noteModelPresenter.textBeginning,
          "</a>",
        "</span> ",
      "</div>"
    ].join("");
  };

  exports.NoteListView = NoteListView;
})(this);
