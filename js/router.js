"use strict";

;(function(exports) {
  function Router() {
    this._routes = [];
  };

  Router.prototype = {
    addRoute: function(httpVerb, path, trigger) {
      this._routes.push({ httpVerb: httpVerb, path: path + "$", trigger: trigger });
      return this;
    },

    sendRequest: function(httpVerb, url, event) {
      var route = this._matchRoute(httpVerb, url);
      if (route !== undefined) {
        route.trigger(event);
      }
    },

    _matchRoute: function(httpVerb, requestUrl) {
      var requestPath = requestUrl.toString().match(/http:\/\/[^\/]+:?\d*(\/?.*)/)[1];
      return this
        ._routes
        .filter(function(route) {
          return route.httpVerb === httpVerb && requestPath.match(route.path);
        })[0];
    },
  };

  exports.Router = Router;
})(this);
