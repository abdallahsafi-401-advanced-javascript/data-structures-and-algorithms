'use strict';

const BinaryTree = require('../Data-Structures/tree/BinaryTree.js');
const Node = require('../Data-Structures/tree/node.js');
const fileFolder = require('../challenges/fileFolder/file-folder.js');

describe('BinaryTree Module', () => {
  let tree1;
  let tree2;
  beforeAll(() => {
    let one = new Node('folder');
    let two = new Node('folder');
    let three = new Node('folder');
    let four = new Node('file');
    let five = new Node('file');
    let six = new Node('folder');
    let seven = new Node('folder');
    let eight = new Node('file');
    let nine = new Node('file');
    one.right = three;
    one.left = two;
    two.left = six;
    six.right = seven;
    seven.right = nine;
    seven.left = eight;
    three.right = five;
    three.left = four;
    tree1 = new BinaryTree(one);
    //                                                         1folder
    //                                                        /       \
    //                                                     2folder     3folder
    //                                                    /            /      \
    //                                                6folder      4file     5file
    //                                                      \
    //                                                     7folder
    //                                                     /     \
    //                                                 8file      9file
    //

    let n1 = new Node('folder');
    let n2 = new Node('folder');
    let n3 = new Node('folder');
    let n4 = new Node('file');
    let n5 = new Node('file');
    let n6 = new Node('folder');
    let n7 = new Node('folder');
    let n8 = new Node('file');
    let n9 = new Node('file');
    n1.right = n3;
    n1.left = n2;
    n2.left = n6;
    n6.right = n7;
    n7.right = n9;
    n6.left = n8;
    n3.right = n5;
    n3.left = n4;
    tree2 = new BinaryTree(n1);
    //                                                         1folder
    //                                                        /       \
    //                                                     2folder     3folder
    //                                                    /            /      \
    //                                                6folder      4file     5file
    //                                                /    \
    //                                           8file     7folder
    //                                                          \
    //                                                          9file
    //
  });

  it('fileFolder()', () => {
    expect(fileFolder.fileFolder(tree1, tree2)).toBeTruthy();
  });
});
