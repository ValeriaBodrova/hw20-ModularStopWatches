export default class StopwatchUI {
    constructor(initialTime) {
        this.hours = initialTime.hours;
        this.minutes = initialTime.minutes;
        this.seconds = initialTime.seconds;

        this.timer = document.createElement('div');
        this.startButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.timer.textContent = `${this.hours}:${this.minutes}:${this.seconds}`;
        this.startButton.textContent = "Start";
        this.pauseButton.textContent = "Pause";
        this.resetButton.textContent = "Reset";
    }

    addStartBtnListener(callback) {
        this.startButton.addEventListener('click', callback);
    }

    addPauseBtnListener(callback) {
        this.pauseButton.addEventListener('click', callback);
    }

    addResetBtnListener(callback) {
        this.resetButton.addEventListener('click', callback);
    }

    appendStopwatch(parentElement) {
        parentElement.appendChild(this.timer);
        parentElement.appendChild(this.startButton);
        parentElement.appendChild(this.pauseButton);
        parentElement.appendChild(this.resetButton);
    }

    setTime(time) {
        this.hours = time.hours;
        this.minutes = time.minutes;
        this.seconds = time.seconds;
        this.timer.textContent = `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}
