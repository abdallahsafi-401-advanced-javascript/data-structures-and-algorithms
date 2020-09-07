'use strict';

function insertShiftArray(arr, value) {
  var m = Math.ceil(arr.length / 2);
  var c = 0,
    o = 0,
    l = arr.length + 1,
    shiftedArr = [];
  while (c < l) {
    if (c === m) {
      shiftedArr[c] = value;
    } else {
      shiftedArr[c] = arr[o];
      o++;
    }
    c++;
  }
  return shiftedArr;
}

// insertShiftArray([2, 4, 6, 8], 5);

// insertShiftArray([4, 8, 15, 23, 42], 16);
