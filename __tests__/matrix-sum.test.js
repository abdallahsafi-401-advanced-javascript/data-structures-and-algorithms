'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');

console.log('multiBracketValidation', multiBracketValidation);

describe('matrixSum Module', () => {
  it('multiBracketValidation() give true when balanced brackets inserted', () => {
    let input = '{}(){}';
    expect(multiBracketValidation.multiBracketValidation(input)).toBeTruthy();
  });

});
