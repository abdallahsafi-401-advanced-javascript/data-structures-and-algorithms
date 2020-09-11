'use strice';

const Node = require('./node.js');
const CustomError = require('./customError.js');


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // adding new value
  insert(value) {
    if(!value){
      throw new CustomError('Invalid value !');
    }
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
    if(!this.head){
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
}

module.exports = LinkedList;
