'use strict';
const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree.js');

describe('FizzBuzzTree Module', () => {
  let tree;
  beforeAll(() => {
    class Node {
      constructor(value = null) {
        this.value = value;
        this.parent = null;
        this.children = [];
      }
    }

    // creating tree constructor
    class Tree {
      constructor(value) {
        let node = new Node(value);
        this.root = node;
      }
    }

    // creating 3-ary tree
    tree = new Tree(3);

    tree.root.children.push(new Node(15));
    tree.root.children[0].parent = tree;

    tree.root.children.push(new Node(10));
    tree.root.children[1].parent = tree;

    tree.root.children.push(new Node(9));
    tree.root.children[2].parent = tree;

    tree.root.children[0].children.push(new Node(4));
    tree.root.children[0].children[0].parent = tree.root.children[0];

    tree.root.children[0].children.push(new Node(20));
    tree.root.children[0].children[1].parent = tree.root.children[0];
  });

  it('fizzBuzzTree()', () => {
    //     console.log('tree --->',fizzBuzzTree.fizzBuzzTree(tree).tree);
    //     console.log('FizzBuzz ----->',fizzBuzzTree.fizzBuzzTree(tree)['FizzBuzz']);
    expect(fizzBuzzTree.fizzBuzzTree(tree)['tree']).toEqual([
      3,
      15,
      4,
      20,
      10,
      9,
    ]);
    expect(fizzBuzzTree.fizzBuzzTree(tree)['FizzBuzz']).toEqual([
      'Fizz',
      'FizzBuzz',
      '4',
      'Buzz',
      'Buzz',
      'Fizz',
    ]);
    expect(fizzBuzzTree.fizzBuzzTree(tree)['tree']).toEqual([
      'Fizz',
      'FizzBuzz',
      '4',
      'Buzz',
      'Buzz',
      'Fizz',
    ]);
  });

  it('fizzBuzzTree() throw error if tree is empty', () => {
    class Node {
      constructor(value = null) {
        this.value = value;
        this.parent = null;
        this.children = [];
      }
    }
  
    // creating tree constructor
    class Tree {
      constructor(value) {
        let node = new Node(value);
        this.root = node;
      }
    }
  
    // creating 3-ary tree
    let tree = new Tree(null);
    try {
      fizzBuzzTree.fizzBuzzTree(tree);
    } catch (error) {
      expect(error).toEqual(new Error('tree is empty'));
    }
  });
});
