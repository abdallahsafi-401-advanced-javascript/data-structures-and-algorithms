'use strict';

function binarySearch(arr, key) {
  if (!(arr && key)) {
    throw new Error('Please insert a valid arguments');
  }
  let start = 0;
  let end = arr.length - 1;
  while(start <= end){
    let mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

module.exports.binarySearch = binarySearch;
