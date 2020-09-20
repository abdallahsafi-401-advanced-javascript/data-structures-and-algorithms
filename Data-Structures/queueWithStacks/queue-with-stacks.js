"use strict";

const CustomError = require("./customError.js");
const Stack = require("../stacksAndQueues/stacks.js");

class PseudoQueue {
  constructor() {
    this.storage1 = new Stack();
    this.storage2 = new Stack();
  }

  enqueue(value) {
    if (!value) {
      throw new CustomError("Invalid argument!");
    }
    this.storage1.push(value);
  }

  dequeue() {
    let current = this.storage1.top;

    while (current) {
      this.storage2.push(current.value);
      current = current.next;
    }

    this.storage2.pop();

    this.storage1 = new Stack();

    current = this.storage2.top;

    while (current) {
      this.storage1.push(current.value);
      current = current.next;
    }

    this.storage2 = new Stack();
  }
}

module.exports = PseudoQueue;
