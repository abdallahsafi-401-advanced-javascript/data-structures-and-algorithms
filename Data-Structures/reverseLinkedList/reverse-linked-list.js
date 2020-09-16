'use strict';

const linkedlist = require('../linkedList/linked-list.js');

function reverseLinkedList(list) {
  let newLinkedList = new linkedlist();
  let current = list.head;
  while (current) {
    newLinkedList.insert(current.value);
    current = current.next;
  }
  return newLinkedList;
}

module.exports.reverseLinkedList = reverseLinkedList;