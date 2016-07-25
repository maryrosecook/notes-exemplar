"use strict";

;(function(exports) {
  var nextId = 0;
  function resetAutoIncrementedId() {
    nextId = 0;
  };

  function NoteModel(text) {
    this._id = nextId++;
    this._text = text;
  };

  NoteModel.prototype = {
    id: function() {
      return this._id;
    },

    text: function() {
      return this._text;
    }
  };

  exports.NoteModel = NoteModel;
  exports.resetAutoIncrementedId = resetAutoIncrementedId;
})(this);
