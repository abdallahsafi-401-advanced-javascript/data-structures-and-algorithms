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
   * Performs preorder traversal of a tree 
   */
  preOrder() {
    if (this.root == null) {
      throw new Error('tree is empty');
    }
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
    return output;
  }

  /**
   * Performs inorder traversal of a tree
   */
  inOrder() {
    if (this.root == null) {
      throw new Error('tree is empty');
    }
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
    return output;
  }

  /**
   * Performs postorder traversal of a tree
   */
  postOrder() {
    if (this.root == null) {
      throw new Error('tree is empty');
    }
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    };
    _traverse(this.root);
    return output;
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
