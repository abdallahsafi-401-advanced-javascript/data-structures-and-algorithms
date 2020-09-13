'use strict';

const Node = require('../Data-Structures/linkedList/node.js');


describe('Node Module', () => {

  it('Node class should creat new node with the value passed', () => {
    let value = 'test';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });

});
