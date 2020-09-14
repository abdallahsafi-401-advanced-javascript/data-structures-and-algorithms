'use strice';

const Node = require('./node.js');
const CustomError = require('./customError.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // adding new value to the head of the list
  insert(value) {
    if (!value) {
      throw new CustomError('Invalid value!');
    }
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
    return this;
  }

  // Search for a given value
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

  //convert the linked list to string format
  toString() {
    if (!this.head) {
      throw new CustomError('this linked list is empty!');
    }
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    return `${str}NULL`;
  }

  // adding new value to the end of the list
  append(value) {
    if (!value) {
      throw new CustomError('Invalid value!');
    }
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.size++;
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

  //add a new node with the given newValue immediately before the first value node
  insertBefore(value, newVal) {
    // checking edge cases
    if (!(value && newVal)) {
      throw new CustomError('Invalid areguments!');
    } else if (this.size === 0) {
      throw new CustomError('Linked List is empty!');
    } else if (!this.include(value)) {
      throw new CustomError('Linked List does not have the value!');
    }
    const node = new Node(newVal);
    let current = this.head;
    if (current.value === value) { // checking if the head is the value we are searching for
      node.next = this.head;
      this.head = node;
      return this;
    }
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        this.size++;
        return this;
      }
      current = current.next;
    }

    return this;
  }

  //add a new node with the given newValue immediately before the first value node
  insertAfter(value, newVal) {
    // checking edge cases
    if (!(value && newVal)) {
      throw new CustomError('Invalid areguments!');
    } else if (this.size === 0) {
      throw new CustomError('Linked List is empty!');
    } else if (!this.include(value)) {
      throw new CustomError('Linked List does not have the value!');
    }
    const node = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        this.size++;
        return this;
      }
      current = current.next;
    }
    return this;
  }
}

module.exports = LinkedList;
