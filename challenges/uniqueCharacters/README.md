## Problem Domain
 write a function that will determine if the given string is full of unique characters.

 **input**: String
 
 **output**: boolean

 ## visual 

 input -> `The quick brown fox jumps over the lazy dog`
 output -> `FALSE`

 input -> `I love cats`
 output -> `TRUE`


## Edge Cases
- input is empty


## algorithm

- Create a function called uniqueCharacters that takes in a string
- convert the string to lower case and trim all whitespaces
- Create new hastable using the length of the string
- Iterate over the char of the string and excute a condition if the hashtable contain it return false and breaks the loop else add to hahtable
- if the loop done will return true

## code

```javascript
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
```