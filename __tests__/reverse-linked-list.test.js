'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list.js');
const reverseLinkedList = require('../Data-Structures/reverseLinkedList/reverse-linked-list.js');

describe('reverseLinkedList Module', () => {

  it('reverseLinkedList() should work properly ', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    let newList = reverseLinkedList.reverseLinkedList(list);
    expect(newList.toString()).toEqual(
      '{ 3 } -> { 2 } -> { 1 } -> NULL',
    );
  });

  //   it('llZip()  should work proberly', () => {
  //     let firstList = new LinkedList();
  //     firstList.append(1);
  //     firstList.append(3);
  //     let secondList = new LinkedList();
  //     secondList.append(5);
  //     secondList.append(9);
  //     secondList.append(4);
  //     let newList = llZip.zipLists(firstList, secondList);
  //     expect(newList.toString()).toEqual(
  //       '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL',
  //     );
  //   });

  //   it('llZip()  should work proberly ', () => {
  //     let firstList = new LinkedList();
  //     firstList.append(1);
  //     firstList.append(3);
  //     firstList.append(2);
  //     let secondList = new LinkedList();
  //     secondList.append(5);
  //     secondList.append(9);
  //     let newList = llZip.zipLists(firstList, secondList);
  //     expect(newList.toString()).toEqual(
  //       '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL',
  //     );
  //   });
});
