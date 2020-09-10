'use strict';

const arrayBinarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

describe('arrayBinarySearch Module', () => {

  it('binarySearch() give the index', () => {
    let arr = [4,8,15,16,23,42];
    let key = 15;
    expect(arrayBinarySearch.binarySearch(arr, key)).toEqual(2);
  });

  it('binarySearch()  will return -1', () => {
    let arr =[11,22,33,44,55,66,77];
    let key = 90;
    expect(arrayBinarySearch.binarySearch(arr, key)).toEqual(-1);
  });

  it('binarySearch()  will return -1', () => {
    let arr =[11,22,33,44,55,66,77];
    let key = 4;
    expect(arrayBinarySearch.binarySearch(arr, key)).toEqual(-1);
  });


  it('binarySearch() will return -1', () => {
    let arr =[];
    let key = 3;
    expect(arrayBinarySearch.binarySearch(arr, key)).toEqual(-1);
  });


  it('should throw error if passed no arguments', () => {
    try {
      arrayBinarySearch.binarySearch();
    } catch (error) {
      expect(error).toEqual(new Error('Please insert a valid arguments'));
    }
  });
});
