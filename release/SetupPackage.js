const fs = require("fs");

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
  const source = fs
    .readFileSync(__dirname + "/../package.json")
    .toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};

  sourceObj.name = `@ontopo/top-pay-shared-components`;
  if (sourceObj.main.startsWith("./dist")) {
    sourceObj.main = sourceObj.main.replace("./dist", ".");
  }
  if (sourceObj.module.startsWith("./dist")) {
    sourceObj.module = sourceObj.module.replace("./dist", ".");
  }
  sourceObj.exports = {
    ".": {
      import: "./top-library.es.js",
      require: "./top-library.umd.js",
    },
    "./style.css": "./style.css",
  };
  fs.writeFileSync(
    __dirname + "/../dist/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8")
  );
}

main();
