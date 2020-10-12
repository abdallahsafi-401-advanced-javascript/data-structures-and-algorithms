'use strict';

const mergeSort = require('../challenges/mergeSort/merge-sort');

describe('mergeSort Module', () => {
  it('mergeSort()', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    expect(mergeSort.mergeSort(arr)).toEqual(expected);
  });
});
