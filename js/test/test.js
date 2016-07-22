"use strict";

function describe(testBlockDescription, testBlockFunction) {
  console.log("\n" + testBlockDescription);
  testBlockFunction();
};

function it(expectationDescription, testFunction) {
  try {
    testFunction();
    reportPassedTest(expectationDescription);
  } catch (exception) {
    reportFailedTest(expectationDescription, exception);
  }
};

function reportPassedTest(expectationDescription) {
  console.log("✅ ", expectationDescription);
};

function reportFailedTest(expectationDescription, exception) {
  console.log("❌ ", expectationDescription);
  console.log("  ", exception.message)
};

exports.describe = describe;
exports.it = it;
