"use strict";

;(function(exports) {
  function NoteListModel(NoteModel) {
    this._NoteModel = NoteModel;
    this._noteModels = [];
  };

  NoteListModel.prototype = {
    all: function() {
      return this._noteModels.concat();
    },

    create: function(title) {
      var noteModel = new this._NoteModel(title);
      this._noteModels.push(noteModel);
      return noteModel;
    },

    findById: function(id) {
      return this
        ._noteModels
        .filter(function(noteModel) {
          return noteModel.id() === parseInt(id);
        })[0];
    }
  };

  exports.NoteListModel = NoteListModel;
})(this);
