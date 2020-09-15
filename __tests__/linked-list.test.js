'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list.js');
const CustomError = require('../Data-Structures/linkedList/customError.js');


describe('LinkedList Module', () => {
  it('constructor()', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('insert()', () => {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.insert(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Second Value';
    list.insert(newValue);
    expect(list.head.value).toEqual(newValue);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(initialValue);
  });

  it('insert() should throw error if passed no arguments', () => {
    try {
      let list = new LinkedList();
      list.insert();
    } catch (error) {
      expect(error).toEqual(new CustomError('Invalid value!'));
    }
  });

  it('include()', () => {
    let list = new LinkedList();
    let first = 1;
    list.insert(first);
    let second = 2;
    list.insert(second);
    let third = 3;
    list.insert(third);
    expect(list.include(2)).toBe(true);
    expect(list.include(5)).toBe(false);
  });

  it('append()', () => {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Second Value';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(newValue);
  });

  it('append() should throw error if passed no arguments', () => {
    try {
      let list = new LinkedList();
      list.append();
    } catch (error) {
      expect(error).toEqual(new CustomError('Invalid value!'));
    }
  });


  it('insertBefore() in the middle', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    let second = 2;
    list.append(second);
    let third = 3;
    list.append(third);
    list.insertBefore(2, 34);
    console.log('ll inserbef',list);
    expect(list.toString()).toEqual('{ 1 } -> { 34 } -> { 2 } -> { 3 } -> NULL');
  });

  it('insertBefore() before the first', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    let second = 2;
    list.append(second);
    let third = 3;
    list.append(third);
    list.insertBefore(1, 34);
    expect(list.toString()).toEqual('{ 34 } -> { 1 } -> { 2 } -> { 3 } -> NULL');
  });

  it('insertBefore() should throw error if linked list is empty', () => {
    try {
      let list = new LinkedList();
      list.insertBefore(2, 34);
    } catch (error) {
      expect(error).toEqual(new CustomError('Linked List is empty!'));
    }
  });

  it('insertAfter() in the middle', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    let second = 2;
    list.append(second);
    let third = 3;
    list.append(third);
    list.insertAfter(2, 34);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 34 } -> { 3 } -> NULL');
  });

  it('insertAfter() after the last', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    let second = 2;
    list.append(second);
    let third = 3;
    list.append(third);
    list.insertAfter(3, 34);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 34 } -> NULL');
  });

  it('toString()', () => {
    let list = new LinkedList();
    let first = 'a';
    list.append(first);
    let second = 'b';
    list.append(second);
    let third = 'c';
    list.append(third);
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  it('toString() should throw error if linked list is empty', () => {
    try {
      let list = new LinkedList();
      list.toString();
    } catch (error) {
      expect(error).toEqual(new CustomError('this linked list is empty!'));
    }
  });

  it('kthFromEnd() works proberly', () => {
    let list = new LinkedList();
    let first = 1;
    list.append(first);
    let second = 3;
    list.append(second);
    let third = 8;
    list.append(third);
    let fourth = 2;
    list.append(fourth);
    expect(list.kthFromEnd(2)).toEqual(3);
  });


});
