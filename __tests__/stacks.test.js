'use strict';

const Stack = require('../Data-Structures/stacksAndQueues/stacks.js');
const CustomError = require('../Data-Structures/stacksAndQueues/customError.js');

describe('Stack Module', () => {
  it('creates a stack instance', () => {
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

  it('push() can isert new node to the stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });

  it('push() took invalid argument', () => {
    let stack = new Stack();
    expect(() => stack.push()).toThrow(CustomError);
    expect(() => stack.push()).toThrow('Invalid argument!');
  
  });

  it('can pop the last item', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.peek()).toEqual(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.peek()).toEqual(1);
  });

  it('does not allow pop from an empty stack', () => {
    let stack = new Stack();
    expect(() => stack.pop()).toThrow(CustomError);
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  it('peeks on the last item', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });

  it('should not peek an empty stack', () => {
    let stack = new Stack();
    expect(() => stack.peek()).toThrow(CustomError);
    expect(() => stack.peek()).toThrow('Stack is empty');
  });

  it('check if the stack isEmpty', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should if the stack is not empty', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
  });
});
