'use strict';

// reverse a linked list  
function  reverseLinkedList(list){
  var current = list.head;
  var previous = null;
  while(current) {
    var save = current.next;
    current.next = previous;
    previous = current;
    current = save;
  }
  list.head = previous;
  return list; 
}

module.exports.reverseLinkedList = reverseLinkedList;