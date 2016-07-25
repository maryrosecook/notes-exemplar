"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var NoteListModel = require("../../js/note-list-model").NoteListModel;

test.describe("NoteListModel", function() {
  test.it("should have no notes when instantiated", function() {
    assert.isTrue(new NoteListModel().all().length === 0);
  });

  test.it("should return some notes when all() called", function() {
    var NoteModelMock = stub({});
    var noteListModel = new NoteListModel(NoteModelMock);
    noteListModel.create("Breakfast");
    noteListModel.create("Lunch");
    assert.isTrue(noteListModel.all().length === 2);
  });

  test.it("should create a note when create() called with text string", function() {
    var NoteModelMock = stub({});
    var noteListModel = new NoteListModel(NoteModelMock);
    noteListModel.create("Eat lunch");
    assert.isTrue(noteListModel.all().length, 1);
  });
});
