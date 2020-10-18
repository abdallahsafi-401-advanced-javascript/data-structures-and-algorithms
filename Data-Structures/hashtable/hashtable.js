'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);
  }

  hash(key) {
    let charArr = key.split('');
    console.log('charArr ----->', charArr);
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
    console.log('hashIndex ----->', hashIndex);
    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }

    let entry = { [key]: value };
    this.entries[hashIndex].append(entry);
  }

  get(key) {
    console.log('this.contains(key) ----->', this.contains(key));
    if (this.contains(key)) {
      let value = this.entries[this.hash(key)].retrieve(key);
      return value;
    }
    return null;
  }

  contains(key) {
    console.log('contain entries', this.entries[this.hash(key)]);
    return (
      this.entries[this.hash(key)] &&
      !!this.entries[this.hash(key)].include(key)
      // (bucket) => Object.keys(bucket)[0] === key,
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

  // Search for a given value
  include(key) {
    console.log('value ---->', key);
    let current = this.head;
    while (current) {
      console.log('current---->', current);
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Search for a given value
  retrieve(key) {
    console.log('value ---->', key);
    let current = this.head;
    while (current) {
      console.log('current---->', current);
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = HashTable;
