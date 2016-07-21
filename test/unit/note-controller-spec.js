var assert = require('chai').assert;
var sinon = require("sinon");

var NoteController = require("../../js/note-controller").NoteController;

describe("NoteController", function() {
  describe("::new", function() {
    it("should be able to create a NoteController", function() {
      var notesElementMock = {};
      var noteListModelMock = {};
      var noteListViewMock = {};
      var NoteViewMock = sinon.stub();
      var routerMock = { addRoute: sinon.stub().returnsThis() };
      assert.instanceOf(new NoteController(notesElementMock,
                                           noteListModelMock,
                                           noteListViewMock,
                                           NoteViewMock,
                                           routerMock),
                        NoteController);
    });

    describe("route binding", function() {
      var routerMock;

      beforeEach(function() {
        var notesElementMock = {};
        var noteListModelMock = {};
        var noteListViewMock = { toHtml: sinon.stub() };
        var NoteViewMock = sinon.stub();
        routerMock = { addRoute: sinon.stub().returnsThis() };

        new NoteController(notesElementMock,
                           noteListModelMock,
                           noteListViewMock,
                           NoteViewMock,
                           routerMock);
      });

      it("should add route for GET index (listing notes)", function() {
        sinon.assert.calledWith(routerMock.addRoute,
                                "GET",
                                "/#/notes",
                                sinon.match.func);
      });

      it("should add route for POST index (creating note)", function() {
        sinon.assert.calledWith(routerMock.addRoute,
                                "POST",
                                "/#/notes",
                                sinon.match.func);
      });

      it("should add route for GET note/id (viewing single note)", function() {
        sinon.assert.calledWith(routerMock.addRoute,
                                "GET",
                                "/#/notes/\\d+",
                                sinon.match.func);
      });
    });
  });
});
