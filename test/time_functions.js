/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const isClockRunning = require('../app').isClockRunning;
const setTimerLength = require('../app').setTimerLength;
const decrementTimer = require('../app').decrementTimer;

describe('Clock functions', () => {
  describe('isClockRunning', () => {
    it('should return true if the clock is running', () => {
      expect(isClockRunning()).to.be.true;
    });
  });
  describe('setTimerLength', () => {
    it('should return a value in ms', () => {
      expect(setTimerLength(3000)).to.equal(3000);
    });
  });
  describe('decrementTimer', () => {
    it('should return a value in ms', () => {
      const timerValue = 3000;
      expect(decrementTimer(timerValue, 1)).to.equal(2999);
    });
  });
});
