"use strict";

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
};

function throws(testFunction, expectedMessage) {
  var thrownMessage = runFunctionAndCaptureExceptionMessage(testFunction);

  if (thrownMessage === undefined) {
    throw new Error("Assertion failed: did not throw exception");
  } else if (thrownMessage !== expectedMessage) {
    throw new Error("Assertion failed: exception message was - " +
                    thrownMessage + ", rather than - " + expectedMessage);
  }
};

function runFunctionAndCaptureExceptionMessage(fn) {
  try {
    fn();
  } catch (exception) {
    return exception.message;
  }
};

exports.isTrue = isTrue;
exports.throws = throws;
