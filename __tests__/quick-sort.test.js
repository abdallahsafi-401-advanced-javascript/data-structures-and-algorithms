'use strict';

const quickSort = require('../challenges/quickSort/quick-sort');

describe('quickSort Module', () => {
  it('quickSort()', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    expect(quickSort.quickSort(arr)).toEqual(expected);
  });
});
