let isRunning;

const setTimerLength = value => value;

const showTimerLengthMinutesSeconds = (value) => {
  const timeInMs = value;
  const timeInSec = timeInMs / 1000;
  const timeInMin = timeInSec / 60;
  const minutes = Math.floor(timeInMin);
  const seconds = Math.round((timeInMin - minutes) * 60);
  let secondsString = seconds.toString();
  if (secondsString === '0') {
    secondsString = '00';
  }
  if (seconds < 10) {
    secondsString = `0${seconds}`;
  }
  return `${minutes}:${secondsString}`;
};

const decrementTimer = (timerValue, amountToDecrement) => timerValue - amountToDecrement;

const updateTimerView = (valueToShow) => {
  $('p').html(valueToShow);
};

const updateLabelView = (valueToShow) => {
  $('h2').html(valueToShow);
};

const startTimerAtValue = (timerValue) => {
  let myTimer = timerValue;
  let timeString = showTimerLengthMinutesSeconds(myTimer);
  updateTimerView(timeString);
  setTimerLength(myTimer);
  const timer = setInterval(() => {
    myTimer = decrementTimer(myTimer, 1000);
    timeString = showTimerLengthMinutesSeconds(myTimer);
    updateTimerView(timeString);
    if (myTimer === 0) {
      clearInterval(timer);
      setTimeout(() => {
        updateLabelView('Break Time!');
      }, 1000);
    }
  }, 1000);
};

const startTimerWithBreak = (timerValue, breakValue) => {
  startTimerAtValue(breakValue + timerValue);
  startTimerAtValue(timerValue);
};

$('document').ready(() => {
  // startTimerWithBreak(12000, 90000);
});

// module.exports.setTimerLength = setTimerLength;
// module.exports.decrementTimer = decrementTimer;
// module.exports.showTimerLengthMinutesSeconds = showTimerLengthMinutesSeconds;
