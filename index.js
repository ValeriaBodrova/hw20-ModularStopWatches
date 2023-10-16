import StopWatch from '../stopwatch.js ';
import StopwatchUI from '../stopwatch-ui.js ';


function initialTime(time) {
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');
    const seconds = String(time.seconds).padStart(2, '0');
    
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

const ui = new StopwatchUI(initialTime);
const onTick = (time) => ui.setTime(time);
const stopwatch = new StopWatch(onTick);

ui.addStartBtnListener(e => stopwatch.start());
ui.addPauseBtnListener(e => stopwatch.pause());
ui.addResetBtnListener(e => stopwatch.reset());

ui.appendStopwatch(document.body);
