var assert = require("chai").assert;
var sinon = require("sinon");
var NoteListView = require("../../js/note-list-view").NoteListView;
var mustache = require("mustache");

describe("::NoteListView", function() {
  describe("#toHtml", function() {
    it("should show title for a note", function() {
      var noteListModelMock = {
        all: sinon.stub().returns([{
          title: sinon.stub().returns("Eat breakfast"),
          id: sinon.stub().returns(0)
        }])
      };

      assert.match(new NoteListView(noteListModelMock, mustache).toHtml(),
                   /<span class='title'>Eat breakfast<\/span>/);
    });

    it("should wrap all todos in main div", function() {
      var noteListModelMock = {
        all: sinon.stub().returns([])
      };

      assert.match(new NoteListView(noteListModelMock, mustache).toHtml(),
                   /<div id='notes'><\/div>/);
    });
  });
});
