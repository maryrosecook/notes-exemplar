"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var NoteListView = require("../../js/note-list-view").NoteListView;

test.describe("NoteListView", function() {
  test.it("should show text for a note", function() {
    var noteListModelMock = {
      all: stub([{
        text: stub("Breakfast"),
        id: stub(0)
      }])
    };

    assert.isTrue(new NoteListView(noteListModelMock).toHtml().match(/Breakfast/));
  });

  test.it("should show only beginning of text for a note", function() {
    var noteListModelMock = {
      all: stub([{
        text: stub("0123456789 01234567890 123456789"),
        id: stub(0)
      }])
    };

    assert.isTrue(new NoteListView(noteListModelMock)
                  .toHtml()
                  .match(/0123456789 012345678/));
  });

  test.it("should link note to page that shows the note", function() {
    var noteListModelMock = {
      all: stub([{
        text: stub("Breakfast"),
        id: stub(0)
      }])
    };

    assert.isTrue(new NoteListView(noteListModelMock)
                  .toHtml()
                  .match(/<a href='\/#\/notes\/0'>Breakfast<\/a>/));
  });

  test.it("should wrap all todos in main div", function() {
    var noteListModelMock = {
      all: stub([])
    };

    assert.isTrue(new NoteListView(noteListModelMock)
                  .toHtml()
                  .match(/<div id='notes'><\/div>/));
  });
});
