class CountdownTimer {
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    setInterval(this.timer, 1000);
  }

  timer = () => {
    const date = this.targetDate;
    const currentDate = Date.now();

    const delta = date - currentDate;
    this.timeCountdown(delta);
  };

  timeCountdown = (time) => {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.innerHTML = days;
    this.refs.hours.innerHTML = hours;
    this.refs.mins.innerHTML = mins;
    this.refs.secs.innerHTML = secs;
  };

  pad = (value) => {
    return String(value).padStart(2, "0");
  };

  viewError() {
    document.querySelector(this.selector).innerHTML = "time is over";
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 21, 2020"),
});
