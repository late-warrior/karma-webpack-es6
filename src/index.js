export {echo, add5} from './pure-node';
export {createBarChart} from './draw';

// Shorthand for $( document ).ready()
$(function() {
    createBarChart();
});
