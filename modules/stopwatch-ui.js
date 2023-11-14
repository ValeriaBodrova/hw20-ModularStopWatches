export default class StopwatchUI {
    constructor(initialTime) {
        this.hours = initialTime.hours;
        this.minutes = initialTime.minutes;
        this.seconds = initialTime.seconds;

        this.timer = document.createElement('div');
        this.startButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        let formattedHours = String(this.hours).padStart(2, '0');
        console.log(formattedHours);
        let formattedMinutes = String(this.minutes).padStart(2, '0');
        let formattedSeconds = String(this.seconds).padStart(2, '0');

        this.timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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

        let formattedHours = String(this.hours).padStart(2, '0');
        let formattedMinutes = String(this.minutes).padStart(2, '0');
        let formattedSeconds = String(this.seconds).padStart(2, '0');
    
        this.timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}
