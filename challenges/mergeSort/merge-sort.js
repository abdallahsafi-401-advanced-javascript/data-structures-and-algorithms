'use strict';

function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    console.log('left', left);
    console.log('right', right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    arr[k] = right[j];
    console.log('right[j] >>>', right[j]);
    j++;
    k++;
  } else {
    arr[k] = left[i];
    console.log('left[i] >>>', left[i]);
    i++;
    k++;
  }
  console.log('left ---', left);
  console.log('right ----', right);
}

module.exports.mergeSort = mergeSort;
