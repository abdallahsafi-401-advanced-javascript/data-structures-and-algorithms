'use strict';

function fizzBuzzTree(tree) {
  if (tree.root.value === null) {
    throw new Error('tree is empty');
  }
  let outputTree = [];
  let outputFizzBuzz = [];
  let _traverse = (node) => {
    if (node) {
      outputTree.push(node.value);
      node.value % 3 === 0 && node.value % 5 === 0
        ? (node.value = 'FizzBuzz')
        : node.value % 3 === 0
          ? (node.value = 'Fizz')
          : node.value % 5 === 0
            ? (node.value = 'Buzz')
            : node.value = String(node.value);
      outputFizzBuzz.push(node.value);
      for (let i = 0; i < node.children.length; i++) {
        node.children.length && _traverse(node.children[i]);
      }
    }
  };
  _traverse(tree.root);
  return {
    tree: outputTree,
    FizzBuzz: outputFizzBuzz,
  };
}

module.exports.fizzBuzzTree = fizzBuzzTree;
