var createServer = require("http-server").createServer;
var Browser = require("zombie");
var path = require("path");
var assert = require("chai").assert;

describe("notes display", function() {
  var browser, server;

  beforeEach(function() {
    server = createServer({ root: path.join(__dirname, "/../../") });
    server.listen(3000);

    browser = new Browser({ site: "http://localhost:3000" });
  });

  it("should redirect from home page to notes list", function(done) {
    browser.visit("/", function() {
      assert.equal(browser.location.pathname + browser.location.hash, "/#/notes");
      done();
    });
  });

  it("should show no browser errors", function(done) {
    browser.visit("/#/notes", function() {
      assert.equal(browser.errors.length, 0);
      done();
    });
  });

  it("should show no note titles on start up", function(done) {
    browser.visit("/#/notes", function() {
      browser.assert.elements(".title", 0);
      done();
    });
  });

  afterEach(function() {
    server.close();
  });
});
