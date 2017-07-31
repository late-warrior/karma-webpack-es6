import {createBarChart} from "../../src/draw"
import assert from 'assert';

describe('Highcharts create chart', () => {
    beforeEach(() => {
        $(document).find('body').append('<div id="container" />');
    });

    it('should create chart correctly', () => {
        const chart = createBarChart('container');
        console.log(chart);
        assert.equal(chart.axes.length, 2);
    });
});
