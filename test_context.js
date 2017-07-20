// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context("./test", true, /_spec$/);
testsContext.keys().forEach(testsContext);
console.log(testsContext.keys());
const sourceContext = require.context("./src", true, /\.js$/);
sourceContext.keys().forEach(sourceContext);
console.log(sourceContext.keys());

