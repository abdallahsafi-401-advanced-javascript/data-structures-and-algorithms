'use strict';

const LinkedList = require('../linkedList/linked-list');

function zipLists(firstList, secondList) {
  let firstCurrent = firstList.head;
  let secondCurrent = secondList.head;
  let resultList = new LinkedList();
  for (let i = 0; i < firstList.size + secondList.size; i++) {
    if (i % 2 === 0 && firstCurrent) {
      resultList.append(firstCurrent.value);
      firstCurrent = firstCurrent.next;
    } else {
      resultList.append(secondCurrent.value);
      secondCurrent = secondCurrent.next;
    }
  }
  return resultList;
}

module.exports.zipLists = zipLists;
