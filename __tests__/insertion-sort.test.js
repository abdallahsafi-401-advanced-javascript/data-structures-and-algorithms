'use strict';

const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('insertionSort Module', () => {
  it('insertionSort()', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    expect(insertionSort.insertionSort(arr)).toEqual(expected);
  });
});
