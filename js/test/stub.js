"use strict";

function stub(returnValue) {
  function stubFunction() {
    stubFunction.calls.push(argumentsObjectToArray(arguments));
    return returnValue;
  };

  stubFunction.calls = [];

  return stubFunction;
};

function argumentsObjectToArray(argumentsObject) {
  return Array.prototype.slice.call(argumentsObject);
};

exports.stub = stub;
