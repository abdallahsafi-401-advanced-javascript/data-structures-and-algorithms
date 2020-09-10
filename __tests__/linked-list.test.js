'use strict';

const LinkedList = require('../challenges/linkedList/linked-list.js');

describe('LinkedList Module', () => {


  it('constructor()', ()=> {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('append()', ()=> {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Second Value';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);
    expect(list.head.next).not.toBeNull();
    expect(list.head.next.value).toEqual(newValue);
  });


});
