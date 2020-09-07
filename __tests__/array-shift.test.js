'use strict';

const arrayShift = require('../challenges/arrayShift/array-shift.js');

console.log('arrayShift', arrayShift);

describe('arrayShift Module', () => {

  it('insertShiftArray() give a valid output', () => {
    let arr = [2, 4, 6, 8];
    let val = 5;
    expect(arrayShift.insertShiftArray(arr, val)).toEqual([2, 4, 5, 6, 8]);
  });

  it('insertShiftArray() give a valid output', () => {
    let arr = [4,8,15,23,42];
    let val = 16;
    expect(arrayShift.insertShiftArray(arr, val)).toEqual([4,8,15,16,23,42]);
  });

  it('should throw error if passed no arguments', () => {
    try {
      arrayShift.insertShiftArray();
    } catch (error) {
      expect(error).toEqual(new Error('Please insert a valid arguments'));
    }
  });

  it('should throw error if passed invalid arguments', () => {
    try {
      arrayShift.insertShiftArray([2,3]);
    } catch (error) {
      expect(error).toEqual(new Error('Please insert a valid arguments'));
    }
  });
});
