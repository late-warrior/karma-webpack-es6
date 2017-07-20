import {echo} from '../../src/pure-node';
import assert from 'assert';

describe('Highcharts numberFormat', () => {
   it('should echo correctly', () => {
      assert.equal('Echoing stuff', echo('stuff'));
   });
});
