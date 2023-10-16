import StopWatch from '../modules/stopwatch.js';
import StopwatchUI from '../modules/stopwatch-ui.js';

const initialTime = {hours: 0, minutes: 0, seconds: 0};
const ui = new StopwatchUI(initialTime);
const onTick = (time) => ui.setTime(time);
const stopwatch = new StopWatch(onTick);

ui.addStartBtnListener(e => stopwatch.start());
ui.addPauseBtnListener(e => stopwatch.pause());
ui.addResetBtnListener(e => stopwatch.reset());

//const parentElement = document.getElementById("myParentElement");
//ui.appendStopwatch(parentElement);

ui.appendStopwatch(document.body);