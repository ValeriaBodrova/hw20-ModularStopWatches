export default class StopWatch {
    constructor(onTick) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.interval = null;
        this.onTick = onTick;
    }

    start() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.seconds++;

                if (this.seconds === 60) {
                    this.seconds = 0;
                    this.minutes++;

                    if (this.minutes === 60) {
                        this.minutes = 0;
                        this.hours++;
                    }
                }

                this.onTick(this.getTime());
            }, 1000);
        }
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        this.pause();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.setTime();
    }

    getTime() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
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



//const onTick = (time) => console.log(time);
//const stopWatch = new StopWatch(onTick);

/* stopWatch.start();

setTimeout(() => {
    stopWatch.pause();

    setTimeout(() => {
        console.log("After 5 seconds:", stopWatch.getTime());
    }, 5000);
}, 5000);

setTimeout(() => {
    stopWatch.reset();
    console.log("After reset:", stopWatch.getTime());
}, 15000); */