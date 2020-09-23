'use strict';
let Stack = require('../../Data-Structures/stacksAndQueues/stacks.js');

//solution without stacks
// function multiBracketValidation(str) {
//   const checker = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
//       checker.push(str[i]);
//     }
//     if (
//       (str[i] === ')' && checker[checker.length - 1] === '(') ||
//       (str[i] === '}' && checker[checker.length - 1] === '{') ||
//       (str[i] === ']' && checker[checker.length - 1] === '[')
//     ) {
//       checker.pop();
//     } else if (
//       (str[i] === ')' && checker[checker.length - 1] !== '(') ||
//       (str[i] === '}' && checker[checker.length - 1] !== '{') ||
//       (str[i] === ']' && checker[checker.length - 1] !== '[')
//     ) {
//       return false;
//     }
//   }
//   if (checker.length === 0) return true;
//   return false;
// }

//solution with stacks

function multiBracketValidation(input) {
  if (input == null) {
    return true;
  }

  let stack = new Stack();
  for (let i = 0; i < input.length; i++) {
    let c = input.charAt(i);
    if (c == '(') {
      stack.push(')');
    }
    if (c == '[') {
      stack.push(']');
    }
    if (c == '{') {
      stack.push('}');
    } else if (c == ')' || c == '}' || c == ']') {
      if (stack.isEmpty() || stack.pop() != c) return false;
    }
  }
  return stack.isEmpty();
}

module.exports.multiBracketValidation = multiBracketValidation;
