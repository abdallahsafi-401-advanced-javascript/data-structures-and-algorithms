'use strict';

const Hashtable = require('../../Data-Structures/hashtable/hashtable.js');

module.exports = (string) => {
  let strArr = string.toLowerCase().split(/[\W]+/g);
  const strHashTable = new Hashtable(strArr.length);
  for (let word of strArr) {
    if (strHashTable.contains(word)) {
      return word;
    } else {
      strHashTable.add(word, word);
    }
  }
  throw new Error('No repeating words');
};
