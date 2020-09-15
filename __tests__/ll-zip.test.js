'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list.js');
const llZip = require('../Data-Structures/llZip/ll-zip.js');

describe('llZip Module', () => {
  it('constructor()', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('llZip() should work proberly ', () => {
    let firstList = new LinkedList();
    firstList.append(1);
    firstList.append(3);
    firstList.append(2);
    let secondList = new LinkedList();
    secondList.append(5);
    secondList.append(9);
    secondList.append(4);
    let newList = llZip.zipLists(firstList, secondList);
    expect(newList.toString()).toEqual(
      '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL',
    );
  });

  it('llZip()  should work proberly', () => {
    let firstList = new LinkedList();
    firstList.append(1);
    firstList.append(3);
    let secondList = new LinkedList();
    secondList.append(5);
    secondList.append(9);
    secondList.append(4);
    let newList = llZip.zipLists(firstList, secondList);
    expect(newList.toString()).toEqual(
      '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL',
    );
  });

  it('llZip()  should work proberly ', () => {
    let firstList = new LinkedList();
    firstList.append(1);
    firstList.append(3);
    firstList.append(2);
    let secondList = new LinkedList();
    secondList.append(5);
    secondList.append(9);
    let newList = llZip.zipLists(firstList, secondList);
    expect(newList.toString()).toEqual(
      '{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL',
    );
  });
});
