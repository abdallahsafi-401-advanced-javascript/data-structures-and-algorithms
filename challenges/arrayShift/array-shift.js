'use strict';

function insertShiftArray(arr, value) {
  if (!(arr && value)) {
    throw new Error('Please insert a valid arguments');
  }
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

module.exports.insertShiftArray = insertShiftArray;
