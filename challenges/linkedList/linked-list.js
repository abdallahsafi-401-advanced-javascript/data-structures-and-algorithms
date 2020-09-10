'use strice';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
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

  include(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }
}

module.exports = LinkedList;
