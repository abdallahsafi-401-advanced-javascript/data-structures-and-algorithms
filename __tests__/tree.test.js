'use strict';

const BinarySearchTree = require('../Data-Structures/tree/tree.js');

describe('BinarySearchTree Module', () => {
  it('preOrder()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17
    expect(Bst.preOrder()).toEqual([15, 10, 7, 5, 9, 13, 25, 22, 17, 27]);
  });
  it('preOrder() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.preOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('inOrder()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17

    expect(Bst.inOrder()).toEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
  });
  it('inOrder() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.inOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('postOrder()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17
    expect(Bst.postOrder()).toEqual([5, 9, 7, 13, 10, 17, 22, 27, 25, 15]);
  });

  it('postOrder() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.postOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('contains()', () => {
    var Bst = new BinarySearchTree();

    // adding nodes to the BinarySearchTree
    Bst.add(15);
    Bst.add(25);
    Bst.add(10);
    Bst.add(7);
    Bst.add(22);
    Bst.add(17);
    Bst.add(13);
    Bst.add(5);
    Bst.add(9);
    Bst.add(27);

    //          15
    //         /  \
    //        10   25
    //       / \   / \
    //      7  13 22  27
    //     / \    /
    //    5   9  17
    let root = Bst.getRootNode();
    expect(Bst.contains(root, 13)).toBeTruthy();
  });

  it('getRootNode() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.getRootNode();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });
  
  it('contains() throw error if tree is empty', () => {
    var Bst = new BinarySearchTree();
    try {
      Bst.contains(null, 13);
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });
});
