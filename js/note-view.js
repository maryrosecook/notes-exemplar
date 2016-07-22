"use strict";

;(function(exports) {
  function NoteView(noteModel) {
    this._noteModel = noteModel;
  };

  NoteView.prototype = {
    toHtml: function() {
      return [
        "<span id='title'>",
          this._noteModel.title(),
        "</span>"
      ].join("");
    }
  };

  exports.NoteView = NoteView;
})(this);
