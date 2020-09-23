
'use strict';

const matrixSum = require('../challenges/matrixSum/matrix-sum.js');

console.log('matrixSum', matrixSum);

describe('matrixSum Module', () => {
  it('matrixSum() give a valid output', () => {
    let matrix = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
    expect(matrixSum.matrixSum(matrix)).toEqual([6, 15, 18]);
  });

  it('insertShiftArray() give a valid output', () => {
    let matrix = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];
    expect(matrixSum.matrixSum(matrix)).toEqual([6, 5, 20]);
  });

  it('should throw error if passed no arguments', () => {
    try {
      matrixSum.matrixSum();
    } catch (error) {
      expect(error).toEqual(new Error('Please insert a valid arguments'));
    }
  });

  it('should throw error if passed invalid arguments', () => {
    try {
      matrixSum.matrixSum([2, 3]);
    } catch (error) {
      expect(error).toEqual(new Error('Please insert a valid arguments'));
    }
  });
});
