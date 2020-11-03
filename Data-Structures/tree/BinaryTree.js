'use strict';

const Node = require('./node.js');
const Queue = require('../stacksAndQueues/queues.js');

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
  traverseBFS() {
    //if there is no root, return false
    if (!this.root) {
      return false;
    }
    //start a new Queue
    const queue = new Queue();
    //keep a tally of all values in the tree
    const treeValues = [];
    //add root to queue
    queue.enqueue(this.root);
    console.log('left 1 ---->', queue);
    queue.enqueue(queue.front.value.left);
    console.log('left 2 ---->', queue);

    // console.log('right ---->', queue.front.value.right);

    //while queue is not empty
    while (queue.size < 14) {
      //get TreeNode Children
      console.log('queue.size --->', queue.size);
      const lnode = queue.front.value.left;
      const rnode = queue.front.value.right;

      //if node has children, loop and add each to queue
      if (lnode != null) {
        queue.enqueue(lnode);
        treeValues.push(lnode.value);
      }
      if (rnode != null) {
        queue.enqueue(rnode);
        treeValues.push(rnode.value);
      }

      //remove first node from queue
      queue.dequeue();
    }
    //return values, should be all TreeNodes
    return treeValues;
  }
}

module.exports = BinaryTree;
