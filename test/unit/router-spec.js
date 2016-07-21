"use strict";

var assert = require("chai").assert;
var sinon = require("sinon");

var Router = require("../../js/router").Router;

describe("Router", function() {
  var router;
  beforeEach(function() {
    router = new Router();
  });

  describe("::new", function() {
    it("should create a new router instance", function() {
      assert.instanceOf(router, Router);
    });
  });

  describe("#sendRequest", function() {
    shouldRouteRequests();
  });

  describe("#addRoute", function() {
    shouldRouteRequests();

    it("should return router instance", function() {
      assert.instanceOf(router.addRoute(), Router);
    });
  });
});

function shouldRouteRequests() {
  describe("routing requests", function() {
    var router;
    beforeEach(function() {
      router = new Router();
    });

    it("should match request on httpVerb and url", function() {
      var routeTrigger = sinon.spy();
      router.addRoute("GET", "/#/woo", routeTrigger);
      router.sendRequest("GET", "http://google.com/#/woo");
      assert.isTrue(routeTrigger.called);
    });

    it("should not match request if http verb is different", function() {
      var routeTrigger = sinon.spy();
      router.addRoute("GET", "/#/woo", routeTrigger);

      assert.throws(function() {
        router.sendRequest("POST", "http://google.com/#/woo");
      }, "Request to unmapped route");
    });

    it("should not match request if url is different", function() {
      var routeTrigger = sinon.spy();
      router.addRoute("GET", "/#/woo", routeTrigger);

      assert.throws(function() {
        router.sendRequest("GET", "http://google.com/#/wooo");
      }, "Request to unmapped route");
    });

    it("should match a request without a hash", function() {
      var routeTrigger = sinon.spy();
      router.addRoute("GET", "/", routeTrigger);
      router.sendRequest("GET", "http://google.com/");
      assert.isTrue(routeTrigger.called);
    });
  });
};
