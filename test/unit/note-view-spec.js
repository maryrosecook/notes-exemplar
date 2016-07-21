var assert = require("chai").assert;
var sinon = require("sinon");
var NoteView = require("../../js/note-view").NoteView;

describe("::NoteView", function() {
  describe("#toHtml", function() {
    it("should show title for a note", function() {
      var noteModelMock = {
        title: sinon.stub().returns("Breakfast")
      };

      assert.match(new NoteView(noteModelMock).toHtml(),
                   /Breakfast/);
    });
  });
});
