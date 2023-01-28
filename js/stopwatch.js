const stopwatch = document.querySelector("#stopwatch");
const playButton = document.querySelector(".pomodoro__start-button");
const pauseButton = document.querySelector(".pomodoro__pause-button");
const resetButton = document.querySelector(".pomodoro__reset-button");

let focusTime = {
  minutes: 25,
  seconds: 0,
};

let isFocus = true;
let intervalId = null;

function displayStopwatch(minute, second) {
  const stringMinute = String(minute).padStart(2, "0");
  const stringSecond = String(second).padStart(2, "0");
  stopwatch.innerText = `${stringMinute}:${stringSecond}`;
}

function reduceOneSecond() {
  if (focusTime.minutes === 0 && focusTime.seconds === 0) {
    if (isFocus) {
      focusTime.minutes = 25;
      focusTime.seconds = 0;
      isFocus = false;
    } else {
      focusTime.minutes = 5;
      focusTime.seconds = 0;
      isFocus = true;
    }
  } else if (focusTime.seconds === 0) {
    focusTime.minutes--;
    focusTime.seconds = 59;
  } else {
    focusTime.seconds--;
  }
  displayStopwatch(focusTime.minutes, focusTime.seconds);
}

playButton.addEventListener("click", () => {
  if (!intervalId) intervalId = setInterval(reduceOneSecond, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  focusTime.minutes = 25;
  focusTime.seconds = 0;
  displayStopwatch(focusTime.minutes, focusTime.seconds);
});
