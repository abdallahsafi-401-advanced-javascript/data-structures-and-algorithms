'use strict';

function multiBracketValidation(input){
  let round = [];
  let square = [];
  let curly = [];
  input.forEach(e => {
    if(e ==='(' || e === ')'){
      round.push(e);
    }else if(e ==='[' || e === ']'){
      square.push(e);
    }else if( e ==='{' || e === '}'){
      curly.push(e);
    }
  });

}