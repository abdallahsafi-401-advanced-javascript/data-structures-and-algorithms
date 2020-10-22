'use strict';

const uniuqeCharacters = require('../challenges/uniqueCharacters/unique-characters');

let str1 = 'The quick brown fox jumps over the lazy dog';

let str2 =
  'I love cats';

let str3 =
  'Donald the duck';

it('should return false for String 1', () => {
  expect(uniuqeCharacters(str1)).toBeFalsy();
});

it('should return true for String 2', () => {
  expect(uniuqeCharacters(str2)).toBeTruthy();
});

it('should return false string 3', () => {
  expect(uniuqeCharacters(str3)).toBeFalsy();
});
