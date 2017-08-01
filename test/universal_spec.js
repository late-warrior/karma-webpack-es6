import { echo } from '../src/universal';
import assert from 'assert';

describe('Tests that run on node', () => {
  it('should echo the input correctly', () => {
    assert.equal(echo('Hello'), 'Echoing Hello');
  });
});
