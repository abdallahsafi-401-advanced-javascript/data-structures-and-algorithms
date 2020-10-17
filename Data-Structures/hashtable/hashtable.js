'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); 
  }

  hash(key) {
    let charArr = key.split('');
    return (
      (charArr.reduce((p, n) => {
        return p + n.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }

  add(key, value) {
    let hashIndex = this.hash(key);
    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }

    let entry = { [key]: value };
    this.entries[hashIndex].append(entry);
  }

  get(key) {
    if (this.contains(key)) {
      let value = this.entries[this.hash(key)].filter(
        (bucket) => Object.keys(bucket)[0] === key,
      )[0][key];
      return value;
    }
    return null;
  }

  contains(key) {
    return (
      this.entries[this.hash(key)] &&
      !!this.entries[this.hash(key)].find(
        (bucket) => Object.keys(bucket)[0] === key,
      )
    );
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

module.exports = HashTable;
