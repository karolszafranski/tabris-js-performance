const {Button, TextView, ui} = require('tabris');

const k = 10000, l = 10;
const MARGIN = 20;

function test() {
    const button = new Button();
    var startDate = new Date();
    for (let index = 0; index < k; index++) {
        button._setText('abc');
    }
    var duration = new Date() - startDate;
    return duration;
}

var result = 0;
var results = [];
for (let run = 0; run < l; run++) {
    result = test();
    results.push(result);
    console.log('Run ' + (run + 1) + ': ' + result + 'ms.');
}

var sum = 0;
for (let index = 0; index < results.length; index++) {
    const element = results[index];
    sum += element;
}
console.log('Average: ' + (sum / results.length));
console.error('Finished');