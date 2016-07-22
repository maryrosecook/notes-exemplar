"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var NoteView = require("../../js/note-view").NoteView;

test.describe("::NoteView", function() {
  test.it("should show title for a note", function() {
    var noteModelMock = {
      title: stub("Breakfast")
    };

    assert.isTrue(new NoteView(noteModelMock).toHtml().match(/Breakfast/));
  });
});
