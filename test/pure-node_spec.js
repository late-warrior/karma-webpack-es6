import { getPathSep } from '../src/pure-node';
import assert from 'assert';

describe('Tests that run on node', () => {
  it('should return path separator correctly for unix*', () => {
    assert.equal(getPathSep(), '/', 'Path separator for unix did not match');
  });
});
