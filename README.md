# What

A minimal repo to demonstrate running tests using Mocha as the test framework and nyc for code coverage.
The tests are run in the following environments:

1. nodejs - mocha is used as the test runner
2. firefox - karma is used for running the tests

# How

## Mocha tests

Mocha tests are triggered from package.json.  The mocha.opts includes babel-register which loads
appropriate babel configuration based on the .babelrc.  For ES6 coverage, we use the nyc tool along with the
babel-plugin-istanbul plugin.  nyc should be configured to not instrument the code as well as to not produce sourceMaps

## Browser tests

The same test configuration as above applies.  Since karma runs the tests on the browser, we need to have karma plugins
that communicate the result of the test run back to the webserver that karma starts.  For this we need to make use of
the following plugins, whose names convey what they integrate with:

1. karma-mocha
2. karma-coverage
3. karma-htmlfile-reporter

In addition, since browser based code is webpack'ed, we need to include karma-webpack also.  karma-webpack lets us
define the entry point in a couple of ways:

1. As individual test files - this lets you run individual tests but for each test run, a webpack bundle is built
2. As a file that dynamically imports other test files - this is more performant, but it means we can no longer run
a test file individually

Additionally, we include karma-sourcemap-loader for producing webpack related sourcemaps.






