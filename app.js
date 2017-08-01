let isRunning;
let timerLength = '25';
let breakLength;
$('span').text(timerLength);

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

const updateTimerLengthDisplay = newValue => $('span').html(newValue);

const updateLabelView = (valueToShow) => {
  $('h2').html(valueToShow);
};

const startTimerAtValue = (timerValue) => {
  let myTimer = timerValue;
  console.log(myTimer);
  let timeString = showTimerLengthMinutesSeconds(myTimer);
  updateTimerLengthDisplay(timeString);
  setTimerLength(myTimer);
  const timer = setInterval(() => {
    myTimer = decrementTimer(myTimer, 1000);
    timeString = showTimerLengthMinutesSeconds(myTimer);
    updateTimerLengthDisplay(timeString);
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

const convertMinStringToMs = (minutesString) => {
  const minutes = parseInt(minutesString, 10);
  const seconds = minutes * 60;
  const milseconds = seconds * 1000;
  return milseconds;
};

const getSpecifiedTimerLength = () => convertMinStringToMs(timerLength);

const getSpecifiedBreakLength = () => {

};

const alterTimerLength = (operator, amountToAlter) => {
  let length = getSpecifiedTimerLength();
  console.log(length);
  const minutesToAlter = amountToAlter * 60000;
  console.log(minutesToAlter);
  if (operator === '+') {
    length += minutesToAlter;
  } else {
    length -= minutesToAlter;
  }
  console.log(length);
  const minuteLength = length / 1000 / 60;
  console.log(minuteLength);
  timerLength = minuteLength;
  updateTimerLengthDisplay(timerLength);
};

$('document').ready(() => {
  // startTimerWithBreak(12000, 90000);
  $('button').click(() => {
    startTimerAtValue(getSpecifiedTimerLength());
  });
  $('.fa-plus').click(() => {
    alterTimerLength('+', 1);
  });
  $('.fa-minus').click(() => {
    alterTimerLength('-', 1);
  });
});

// module.exports.setTimerLength = setTimerLength;
// module.exports.decrementTimer = decrementTimer;
// module.exports.showTimerLengthMinutesSeconds = showTimerLengthMinutesSeconds;
