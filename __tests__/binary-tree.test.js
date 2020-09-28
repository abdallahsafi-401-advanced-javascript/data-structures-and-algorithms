'use strict';

const BinaryTree = require('../Data-Structures/tree/BinaryTree.js');
const Node = require('../Data-Structures/tree/node.js');

describe('BinaryTree Module', () => {
  let tree;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);
    one.right = three;
    one.left = two;
    two.left = six;
    six.right = seven;
    seven.right = nine;
    seven.left = eight;
    three.right = five;
    three.left = four;
    tree = new BinaryTree(one);
    
  });

  it('preOrder()', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderOutput = tree.preOrder();
    console.log('preOrderOutput >> ', preOrderOutput);
    expect(preOrderOutput).toEqual(expected);
  });

  it('inOrder()', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderOutput = tree.inOrder();
    expect(inOrderOutput).toEqual(expected);
  });

  it('postOrder()', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderOutput = tree.postOrder();
    expect(postOrderOutput).toEqual(expected);
  });

  it('preOrder() throw error if tree is empty', () => {
    var Bt = new BinaryTree();
    try {
      Bt.preOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('inOrder() throw error if tree is empty', () => {
    var Bt = new BinaryTree();
    try {
      Bt.inOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('postOrder() throw error if tree is empty', () => {
    var Bt = new BinaryTree();
    try {
      Bt.postOrder();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });


  it('findMax()', () => {
    console.log(tree);
    let expected = 9;
    let max = tree.findMax();
    expect(max).toEqual(expected);
  });

  it('findMax() throw error if tree is empty', () => {
    var Bt = new BinaryTree();
    try {
      Bt.findMax();
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });

  it('Bft()', () => {
    // let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let traverseBFS = tree.traverseBFS();
    console.log('traverseBFS ------->', traverseBFS);
    // expect(postOrderOutput).toEqual(expected);
  });

});
