const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const btnStart = document.querySelector("[data-action=start]");
const btnStop = document.querySelector("[data-action=stop]");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitchFn = () => {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

let intervalId = null;

const intervalStart = () => {
  btnStop.addEventListener("click", intervalStop);
  btnStart.removeEventListener("click", intervalStart);
  intervalId = setInterval(() => {
    colorSwitchFn();
  }, 1000);
};

const intervalStop = () => {
  btnStop.removeEventListener("click", intervalStop);
  btnStart.addEventListener("click", intervalStart);
  clearInterval(intervalId);
};

btnStart.addEventListener("click", intervalStart);
btnStop.addEventListener("click", intervalStop);

// ? Напиши скрипт, который после нажатия кнопки Start, раз в секунду
// ? меняет цвет фона body на случайное значение из массива используя
// ? инлайн - стиль.При нажатии на кнопку Stop, изменение цвета фона
// ? должно останавливаться.
// ? ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// ? Сделай так, чтобы пока изменение темы запушено, кнопка Start была
// ? не активна.
