'use strict';

const Node = require('./node.js');


class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /**
     * add to tree
     * @param {*} value 
     */
  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }
  
  /**
     * helper method for adding to tree 
     * @param {*} node 
     * @param {*} newNode 
     */
  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
  
  /**
     * returns root of the tree
     */
  getRootNode() {
    if (this.root == null) {
      throw new Error('tree is empty');
    }
    return this.root;
  }


  /**
   * search for given value
   * @param {object} node 
   * @param {*} value 
   */
  contains(node, value) {
    if (node === null) {
      throw new Error('tree is empty');
    } else if (value < node.value) {
      return this.contains(node.left, value);
    } else if (value > node.value) {
      return this.contains(node.right, value);
    } else {
      return !!node;
    }
  }
}

module.exports = BinarySearchTree;
