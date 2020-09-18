'use strict';

const Queue = require('../Data-Structures/stacksAndQueues/queues.js');
const CustomError = require('../Data-Structures/stacksAndQueues/customError.js');

describe('Queues Module', () => {
  it('creates a stack instance', () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it('enqueue() can isert new node to the stack', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
    queue.enqueue(2);
    expect(queue.rear.value).toEqual(2);
    queue.enqueue(3);
    expect(queue.rear.value).toEqual(3);
  });

  it('enqueue() can not take invalid argument', () => {
    let queue = new Queue();
    expect(() => queue.enqueue()).toThrow(CustomError);
    expect(() => queue.enqueue()).toThrow('Invalid argument!');
  });

  it('can pop the last item', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log('queue >>>', queue);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.peek()).toEqual(3);
  });

  it('does not allow dequeue from an empty stack', () => {
    let queue = new Queue();
    expect(() => queue.dequeue()).toThrow(CustomError);
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  it('peeks on the last item', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it('should not peek an empty stack', () => {
    let queue = new Queue();
    expect(() => queue.peek()).toThrow(CustomError);
    expect(() => queue.peek()).toThrow('Queue is empty');
  });

  it('check if the stack isEmpty', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should if the stack is not empty', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
});
