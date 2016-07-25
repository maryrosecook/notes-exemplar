"use strict";

;(function(exports) {
  function NoteView(noteModel) {
    this._noteModel = noteModel;
  };

  NoteView.prototype = {
    toHtml: function() {
      return [
        "<div id='text'>",
          this._noteModel.text(),
        "</div>",
      ].join("");
    }
  };

  exports.NoteView = NoteView;
})(this);
