const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    let remainingSeconds = seconds;

    intervalId = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        return;
      }

      const formattedTime = formatTime(remainingSeconds);
      timerEl.textContent = formattedTime;
    }, 1000);
  };
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = padNumber(hours);
  const formattedMinutes = padNumber(minutes);
  const formattedSeconds = padNumber(remainingSeconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const padNumber = (number) => {
  return number.toString().padStart(2, '0');
};

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});


buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);

  inputEl.value = '';
  inputMinutesEl.value = '';
  inputSecondsEl.value = '';
});

const animateTimer = createTimerAnimator();