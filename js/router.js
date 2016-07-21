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
      } else {
        throw new Error("Request to unmapped route: " + httpVerb + " " + url);
      }
    },

    _matchRoute: function(httpVerb, requestUrl) {
      var requestPath = requestUrl.toString().match(/(http:\/\/[^\/]+:?\d*)?(\/?.*)/)[2];

      return this
        ._routes
        .filter(function(route) {
          return route.httpVerb.toLowerCase() === httpVerb.toLowerCase() &&
            requestPath.match(route.path);
        })[0];
    },
  };

  exports.Router = Router;
})(this);
