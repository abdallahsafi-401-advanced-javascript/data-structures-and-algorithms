'use strict';


function matrixSum(matrix){
  if (!(matrix)) {
    throw new Error('Please insert a valid arguments');
  }
  let result = [];
  let temp = 0;
  for (let i = 0; i <matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      temp += matrix[i][j];
    }
    result[i] = temp;
    temp = 0
  }
  return result;
}


module.exports.matrixSum = matrixSum;
