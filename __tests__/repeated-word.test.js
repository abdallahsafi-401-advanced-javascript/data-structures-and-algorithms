'use strict';

const repeatedWord = require('../challenges/repeatedWord/repeated-word');

let str1 = 'Once upon a time, there was a brave princess who...';

let str2 =
  'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let str3 =
  'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

it('should return a from String 1', () => {
  expect(repeatedWord(str1)).toBe('a');
});

it('should return it from String 2', () => {
  expect(repeatedWord(str2)).toBe('it');
});

it('should return summer from string 3', () => {
  expect(repeatedWord(str3)).toBe('summer');
});
