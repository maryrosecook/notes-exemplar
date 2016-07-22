"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var NoteListView = require("../../js/note-list-view").NoteListView;

test.describe("::NoteListView", function() {
  test.it("should show title for a note", function() {
    var noteListModelMock = {
      all: stub([{
        title: stub("Breakfast"),
        id: stub(0)
      }])
    };

    assert.isTrue(new NoteListView(noteListModelMock).toHtml().match(/Breakfast/));
  });

  test.it("should link note to page that shows the note", function() {
    var noteListModelMock = {
      all: stub([{
        title: stub("Breakfast"),
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
