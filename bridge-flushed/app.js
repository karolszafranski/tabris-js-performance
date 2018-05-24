const {Button, TextView, ui} = require('tabris');

const k = 1000;
const MARGIN = 20;
const textView = new TextView({left: MARGIN, right: MARGIN, top: 'prev() ' + MARGIN});

function test() {
    var startDate = new Date();
    for (let index = 0; index < k; index++) {
        new Button();
        tabris.trigger('flush');
    }
    var duration = (new Date() - startDate) + "ms \n";
    textView.text = textView.text + duration;
}

new Button({
    left: MARGIN, top: MARGIN, right: MARGIN,
    text: 'run'
}).on('select', test)
  .appendTo(ui.contentView);

textView.appendTo(ui.contentView);
