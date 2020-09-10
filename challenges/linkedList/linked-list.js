'use strice';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return this;
  }
}

module.exports = LinkedList;
