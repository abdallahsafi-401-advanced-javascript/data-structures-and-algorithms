'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list.js');
const reverseLinkedList = require('../Data-Structures/reverseLinkedList/reverse-linked-list.js');

describe('reverseLinkedList Module', () => {

  it('reverseLinkedList() should work properly ', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    let newList = reverseLinkedList.reverseLinkedList(list);
    console.log('newList >>>>', newList);
    expect(newList.toString()).toEqual(
      '{ 3 } -> { 2 } -> { 1 } -> NULL',
    );
  });

  it('reverseLinkedList() should work properly ', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    let newList = reverseLinkedList.reverseLinkedList(list);
    expect(newList.toString()).toEqual(
      '{ c } -> { b } -> { a } -> NULL',
    );
  });

});
