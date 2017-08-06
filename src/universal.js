// We need to import babel-polyfill here as well because this file can be individually required
// in unit tests which means having babel-polyfill at the entry point (index.js) is not sufficient

import 'babel-polyfill';

export function echo(inp) {
  return `Echoing ${inp}`;
}

export function* exampleGenerator() {
  yield 5;
  return 4;
}
