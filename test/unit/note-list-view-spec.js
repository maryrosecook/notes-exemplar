var assert = require("chai").assert;
var sinon = require("sinon");
var NoteListView = require("../../js/note-list-view").NoteListView;
var mustache = require("mustache");

describe("::NoteListView", function() {
  describe("#toHtml", function() {
    it("should show title for a note", function() {
      var noteListModelMock = {
        all: sinon.stub().returns([{
          title: sinon.stub().returns("Breakfast"),
          id: sinon.stub().returns(0)
        }])
      };

      assert.match(new NoteListView(noteListModelMock, mustache).toHtml(),
                   /Breakfast/);
    });

    it("should link note to page that shows the note", function() {
      var noteListModelMock = {
        all: sinon.stub().returns([{
          title: sinon.stub().returns("Breakfast"),
          id: sinon.stub().returns(0)
        }])
      };

      assert.match(new NoteListView(noteListModelMock, mustache).toHtml(),
                   /<a href='\/#\/notes\/0'>Breakfast<\/a>/);
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
