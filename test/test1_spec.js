//import {createBarChart} from '../src/draw';
import {echo} from '../src/pure-node';
import assert from 'assert';

describe('Highcharts numberFormat', () => {
   it('should format correctly', () => {
      assert.equal('Echoing stuff', echo('stuff'));
   });

   it('should hot reload tests', () => {
      assert.equal(4,4);
   });
});