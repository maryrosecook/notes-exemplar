var assert = require('chai').assert;
var noteModelLib = require("../../js/note-model");

describe("NoteModel", function() {
  beforeEach(function() {
    noteModelLib.resetAutoIncrementedId();
  });

  describe("::new", function() {
    it("should allow creation of new Note", function() {
      assert.instanceOf(new noteModelLib.NoteModel(), noteModelLib.NoteModel);
    });
  });

  describe("#title", function() {
    it("should return title", function() {
      var title = "Breakfast";
      assert.equal(new noteModelLib.NoteModel(title).title(), title);
    });
  });

  describe("#id", function() {
    it("should return id", function() {
      assert.equal(new noteModelLib.NoteModel("woo").id(), 0);
    });
  });
});
