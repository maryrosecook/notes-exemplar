"use strict";

var fs = require("fs");
var path = require("path");

function isTestFile(fileName) {
  return fileName.match(/spec\.js$/);
};

function runTestFile(filePath) {
  require(filePath);
};

function runAllTestsInDirectory(directoryPath) {
  fs.readdirSync(directoryPath)
    .filter(isTestFile)
    .map(function(fileName) {
      return path.join(directoryPath, fileName);
    })
    .forEach(runTestFile);
};

runAllTestsInDirectory(__dirname);
