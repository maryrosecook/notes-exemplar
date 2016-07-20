var assert = require('chai').assert;
var sinon = require("sinon");

var NoteListModel = require("../../js/note-list-model").NoteListModel;

describe("NoteListModel", function() {
  describe("::new", function() {
    it("should have no to dos when instantiated", function() {
      assert.equal(new NoteListModel().all().length, 0);
    });
  });

  describe("#all", function() {
    it("should return no to dos when there are no to dos", function() {
      assert.equal(new NoteListModel().all().length, 0);
    });

    it("should return some todos when there are some to dos", function() {
      var NoteModelMock = sinon.stub().returns({});
      var noteListModel = new NoteListModel(NoteModelMock);
      noteListModel.create("Breakfast");
      noteListModel.create("Lunch");
      assert.equal(noteListModel.all().length, 2);
    });
  });

  describe("#create", function() {
    it("should create a note when passed a title string", function() {
      var NoteModelMock = sinon.stub().returns({});
      var noteListModel = new NoteListModel(NoteModelMock);
      noteListModel.create("Eat lunch");
      assert.equal(noteListModel.all().length, 1);
    });
  });
});
