'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');

console.log('multiBracketValidation', multiBracketValidation);

describe('multiBracketValidation Module', () => {

  it('multiBracketValidation() give true when balanced brackets inserted', () => {
    let input1 = '{}(){}';
    expect(multiBracketValidation.multiBracketValidation(input1)).toBeTruthy();
    let input2 = '()[[Extra Characters]]';
    expect(multiBracketValidation.multiBracketValidation(input2)).toBeTruthy();
    let input3 = '(){}[[]]';
    expect(multiBracketValidation.multiBracketValidation(input3)).toBeTruthy();
    let input4 = '{}{Code}[Fellows](())';
    expect(multiBracketValidation.multiBracketValidation(input4)).toBeTruthy();
  });

  it('multiBracketValidation() give false when unbalanced brackets inserted', () => {
    let input1 = '[({}]';
    expect(multiBracketValidation.multiBracketValidation(input1)).toBeFalsy();
    let input2 = '(](';
    expect(multiBracketValidation.multiBracketValidation(input2)).toBeFalsy();
    let input3 = '{(})';
    expect(multiBracketValidation.multiBracketValidation(input3)).toBeFalsy();
  });

});
