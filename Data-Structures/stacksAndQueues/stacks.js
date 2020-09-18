'use strict';

const Node = require('./node.js');
const CustomError = require('./customError.js');

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    if (!value) {
      throw new CustomError('Invalid argument!');
    }
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new CustomError('Stack is empty');
    }
    let item = this.top;
    this.top = this.top.next;
    this.size--;
    return item.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new CustomError('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0 ;
  }
}

module.exports = Stack;
