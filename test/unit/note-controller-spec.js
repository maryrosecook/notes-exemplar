"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var NoteController = require("../../js/note-controller").NoteController;

test.describe("NoteController", function() {
  test.it("should be able to create a NoteController", function() {
    var routerMock = {};
    routerMock.addRoute = stub(routerMock);
    var noteController = new NoteController({}, {}, stub(), stub(), routerMock);

    assert.isTrue(noteController instanceof NoteController);
  });

  test.it("should add route for GET index (listing notes)", function() {
    var routerMock = {};
    routerMock.addRoute = stub(routerMock);
    var noteController = new NoteController({}, {}, stub(), stub(), routerMock);

    var indexAddRouteCall = routerMock.addRoute.calls[1];
    assert.isTrue(indexAddRouteCall[0] === "GET");
    assert.isTrue(indexAddRouteCall[1] === "/#/notes");
    assert.isTrue(indexAddRouteCall[2] instanceof Function);
  });

  test.it("should add route for POST index (creating note)", function() {
    var routerMock = {};
    routerMock.addRoute = stub(routerMock);
    var noteController = new NoteController({}, {}, stub(), stub(), routerMock);

    var indexAddRouteCall = routerMock.addRoute.calls[2];
    assert.isTrue(indexAddRouteCall[0] === "POST");
    assert.isTrue(indexAddRouteCall[1] === "/#/notes");
    assert.isTrue(indexAddRouteCall[2] instanceof Function);
  });

  test.it("should add route for GET note/id (viewing single note)", function() {
    var routerMock = {};
    routerMock.addRoute = stub(routerMock);
    var noteController = new NoteController({}, {}, stub(), stub(), routerMock);

    var indexAddRouteCall = routerMock.addRoute.calls[0];
    assert.isTrue(indexAddRouteCall[0] === "GET");
    assert.isTrue(indexAddRouteCall[1] === "/#/notes/\\d+");
    assert.isTrue(indexAddRouteCall[2] instanceof Function);
  });
});
