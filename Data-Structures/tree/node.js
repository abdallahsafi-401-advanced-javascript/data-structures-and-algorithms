'use strict';

class Node {
  constructor(value, left = null, rigth = null) {
    this.value = value;
    this.left = left;
    this.rigth = rigth;
  }
}

module.exports = Node;
