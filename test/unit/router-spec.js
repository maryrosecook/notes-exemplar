"use strict";

var test = require("../../js/test/test");
var assert = require("../../js/test/assert");
var stub = require("../../js/test/stub").stub;

var Router = require("../../js/router").Router;

test.describe("Router", function() {
  test.it("should create a new router instance", function() {
    assert.isTrue(new Router() instanceof Router);
  });

  test.it("should return router instance when route added", function() {
    assert.isTrue(new Router().addRoute() instanceof Router);
  });

  test.it("should match request on httpVerb and url", function() {
    var router = new Router();
    var routeTrigger = stub();

    router.addRoute("GET", "/#/woo", routeTrigger);
    router.sendRequest("GET", "http://google.com/#/woo");

    assert.isTrue(routeTrigger.calls.length > 0);
  });

  test.it("should not match request if http verb is different", function() {
    var router = new Router();
    var routeTrigger = stub();

    router.addRoute("GET", "/#/woo", routeTrigger);

    assert.throws(function() {
      router.sendRequest("POST", "http://google.com/#/woo");
    }, "Request to unmapped route: POST http://google.com/#/woo");
  });

  test.it("should not match request if url is different", function() {
    var router = new Router();
    var routeTrigger = stub();
    router.addRoute("GET", "/#/woo", routeTrigger);

    assert.throws(function() {
      router.sendRequest("GET", "http://google.com/#/wooo");
    }, "Request to unmapped route: GET http://google.com/#/wooo");
  });

  test.it("should match a request without a hash", function() {
    var router = new Router();
    var routeTrigger = stub();
    router.addRoute("GET", "/", routeTrigger);
    router.sendRequest("GET", "http://google.com/");
    assert.isTrue(routeTrigger.calls.length === 1);
  });
});
