'use strict';

const Node = require('./node.js');
const CustomError = require('./customError.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(value) {
    if (!value) {
      throw new CustomError('Invalid argument!');
    }
    const node = new Node(value);
    if (this.rear === null) {
      this.front = this.rear = node;
      this.size++;
      return;
    }
    this.rear.next = node;
    this.rear = node;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new CustomError('Queue is empty');
    }
    let item = this.front;
    this.front = this.front.next;
    return item.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new CustomError('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
