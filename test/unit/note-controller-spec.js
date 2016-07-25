"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var Router = require("../../js/router").Router;
var NoteController = require("../../js/note-controller").NoteController;

test.describe("NoteController", function() {
  // tests use an unmocked Router to avoid having to write verbose
  // mock to test outgoing messages to noteListModel and router

  test.it("should render note list on GET /#/notes", function() {
    var appElementMock = {};

    var outputHtml = "outputHtml";
    var NoteListViewMock = stub({ toHtml: stub(outputHtml) });

    var router = new Router();

    var noteController = new NoteController(appElementMock,
                                            {},
                                            NoteListViewMock,
                                            stub(),
                                            router);

    router.sendRequest("GET", "/#/notes");
    assert.isTrue(appElementMock.innerHTML === outputHtml);
  });

  test.it("should create note on POST /#/notes", function() {
    var noteListModelMock = { create: stub() };
    var NoteListViewMock = stub({ toHtml: stub() });
    var router = new Router();
    var noteController = new NoteController({},
                                            noteListModelMock,
                                            NoteListViewMock,
                                            stub(),
                                            router);

    var note = "hello";
    var event = { target: { elements: { title: { value: note } } } };

    router.sendRequest("POST", "/#/notes", event);
    assert.isTrue(noteListModelMock.create.calls[0][0] === note);
  });

  test.it("should render note list on POST /#/notes", function() {
    var appElementMock = {};
    var noteListModelMock = { create: stub() };

    var outputHtml = "the view";
    var NoteListViewMock = stub({ toHtml: stub(outputHtml) });


    var router = new Router();
    var noteController = new NoteController(appElementMock,
                                            noteListModelMock,
                                            NoteListViewMock,
                                            stub(),
                                            router);

    var event = { target: { elements: { title: {  } } } };
    router.sendRequest("POST", "/#/notes", event);
    assert.isTrue(appElementMock.innerHTML === outputHtml);
  });

  test.it("should render single note on GET /#/notes/1", function() {
    var appElementMock = {};
    var noteModelMock = {};
    var noteListModelMock = { findById: stub(noteModelMock) };

    var outputHtml = "the view"
    var noteViewMock = { toHtml: stub(outputHtml) };
    var NoteViewMock = stub(noteViewMock);

    var router = new Router();
    var noteController = new NoteController(appElementMock,
                                            noteListModelMock,
                                            stub(),
                                            NoteViewMock,
                                            router);

    var event = { newURL: "http://localhost:4000/#/notes/1" };
    router.sendRequest("GET", "/#/notes/1", event);

    assert.isTrue(NoteViewMock.calls[0][0] === noteModelMock);
    assert.isTrue(noteViewMock.toHtml.calls.length === 1);
    assert.isTrue(appElementMock.innerHTML === outputHtml);
  });
});
