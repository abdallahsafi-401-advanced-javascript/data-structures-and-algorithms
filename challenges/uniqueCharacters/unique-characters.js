'use strict';

const Hash = require('../../Data-Structures/hashtable/hashtable');

function uniqueCharacters(str) {
  let newStr = str.toLowerCase().replace(/\s/g, '');
  const HashTable = new Hash(newStr.length);
  for (let i = 0; i < newStr.length; i++) {
    if (HashTable.contains(newStr[i])) {
      return false;
    } else {
      HashTable.add(newStr[i], newStr[i]);
    }
  }
  return true;
}

module.exports = uniqueCharacters;
