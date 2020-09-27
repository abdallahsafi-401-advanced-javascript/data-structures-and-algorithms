'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
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
   * find the maximum number in the tree
   */
  findMax() {
    if (this.root === null) {
      throw new Error('tree is empty');
    }

    let max = this.root.value;
    let _traverse = (node) => {
      if (node.left) {
        let lmax = node.left.value;
        max = lmax > max ? lmax : max;
        _traverse(node.left);
      }
      if (node.right) {
        let rmax = node.right.value;
        max = rmax > max ? rmax : max;
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return max;
  }
}

module.exports = BinaryTree;
