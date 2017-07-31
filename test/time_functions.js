/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const setTimerLength = require('../app').setTimerLength;
const decrementTimer = require('../app').decrementTimer;
const showTimerLengthMinutesSeconds = require('../app').showTimerLengthMinutesSeconds;

describe('Clock functions', () => {
  describe('setTimerLength', () => {
    it('should return a value in ms', () => {
      expect(setTimerLength(3000)).to.equal(3000);
    });
  });
  describe('decrementTimer', () => {
    it('should return a value in ms', () => {
      const timerValue = 3000;
      expect(decrementTimer(timerValue, 1000)).to.equal(2000);
    });
  });
  describe('showTimerLengthMinutesSeconds', () => {
    it('should convert ms time to min:sec time', () => {
      expect(showTimerLengthMinutesSeconds(143279)).to.equal('2:23');
      expect(showTimerLengthMinutesSeconds(1500000)).to.equal('25:00');
    });
  });
});
