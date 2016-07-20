"use strict";

;(function(exports) {
  var nextId = 0;
  function resetAutoIncrementedId() {
    nextId = 0;
  };

  function NoteModel(title) {
    this._id = nextId++;
    this._title = title;
  };

  NoteModel.prototype = {
    id: function() {
      return this._id;
    },

    title: function() {
      return this._title;
    }
  };

  exports.NoteModel = NoteModel;
  exports.resetAutoIncrementedId = resetAutoIncrementedId;
})(this);
