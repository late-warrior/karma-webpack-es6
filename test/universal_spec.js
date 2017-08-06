import { echo, exampleGenerator } from '../src/universal';
import assert from 'assert';

describe('Tests that run on node', () => {
  it('should echo the input correctly', () => {
    assert.equal(echo('Hello'), 'Echoing Hello');
  });

  it('should work with generators', () => {
    const gen = exampleGenerator();
    assert.equal(gen.next().value, 5);
    assert.equal(gen.next().value, 4);
  });
});
