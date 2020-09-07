'use strict';

function reverseArray(arr) {
  let reversedArr = [];
  let reverseIndex = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr[reverseIndex] = arr[i];
    reverseIndex++;
  }
  return reversedArr;
}

//test the function
let arr = [1, 2, 3, 4, 5, 6];
let res = reverseArray(arr);
console.log(res);
