'use strict';

const LinkedList = require('../challenges/linkedList/linked-list.js');
const CustomError = require('../challenges/linkedList/customError.js');


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
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(newValue);
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

  it('toString()', () => {
    let list = new LinkedList();
    let first = 'a';
    list.insert(first);
    let second = 'b';
    list.insert(second);
    let third = 'c';
    list.insert(third);
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
});
