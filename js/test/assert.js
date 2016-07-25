"use strict";

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
};

function throws(testFunction, expectedMessage) {
  var exception = catchExceptionFrom(testFunction);

  if (exception === undefined) {
    throw new Error("Did not throw exception");
  }

  if (exception.message !== expectedMessage) {
    throw new Error("Expected '" + expectedMessage + "' but got '" + exception.message + "'");
  }
};

function catchExceptionFrom(fn) {
  try {
    fn();
  } catch (exception) {
    return exception;
  }
};

exports.isTrue = isTrue;
exports.throws = throws;
