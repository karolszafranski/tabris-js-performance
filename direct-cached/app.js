const {Button, TextView, ui} = require('tabris');

const k = 1000, l = 10;
const MARGIN = 20;

function test() {
    var startDate = new Date();
    for (let index = 0; index < k; index++) {
        new Button();
    }
    tabris.trigger('flush');
    var duration = new Date() - startDate;
    return duration;
}

for (let run = 0; run < l; run++) {
    console.log('Run ' + (run + 1) + ': ' + test() + 'ms.');
}
console.error('Finished');