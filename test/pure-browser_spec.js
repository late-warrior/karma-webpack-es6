import { createBarChart, createMap } from '../src/pure-browser';
import assert from 'assert';

describe('Highcharts create chart', () => {
  beforeEach(() => {
    $(document).find('body').append('<div id="container" />');
    $(document).find('body').append('<div id="container-1" />');
  });

  it('should create chart correctly', () => {
    const chart = createBarChart('container');
    assert.equal(chart.axes.length, 2);
  });

  it('should create a map correctly', () => {
    const map = createMap('container-1');
    assert.equal(map.series.length, 1);
    assert.equal(map.tooltip.options.animation, true);
  });
});
