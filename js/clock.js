const clock = document.querySelector("#clock");
const currentTime = document.querySelector(".current-time");
const pomodoro = document.querySelector(".pomodoro");
const toggleButton = document.querySelectorAll(".time__toggle-button");

function showClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${minute}:${second}`;
}

function switchMode() {
  currentTime.classList.toggle("hidden");
  pomodoro.classList.toggle("hidden");
}

showClock();
setInterval(showClock, 1000);

toggleButton[0].addEventListener("click", switchMode);
toggleButton[1].addEventListener("click", switchMode);
