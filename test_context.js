// This file can be processed only by webpack which provides the require.context function

// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context('./test', true, /_spec$/);
testsContext.keys().forEach(testsContext);
const sourceContext = require.context('./src', true, /\.js$/);
sourceContext.keys().forEach(sourceContext);
