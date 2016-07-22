"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");

var noteModelLib = require("../../js/note-model");

test.describe("NoteModel", function() {
  test.it("should allow creation of a new Note", function() {
    noteModelLib.resetAutoIncrementedId();
    assert.isTrue(new noteModelLib.NoteModel() instanceof noteModelLib.NoteModel);
  });

  test.it("should return title when title() called", function() {
    var title = "Breakfast";
    assert.isTrue(new noteModelLib.NoteModel(title).title() === title);
  });

  test.it("should return id when id() called", function() {
    noteModelLib.resetAutoIncrementedId();
    assert.isTrue(new noteModelLib.NoteModel("woo").id() === 0);
  });
});
