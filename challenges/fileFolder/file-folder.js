'use strict';

function fileFolder(tree1, tree2) {
  let arTree1 = tree1.preOrder();
  let arTree2 = tree1.preOrder();
  let file1 = arTree1.filter((e) => {
    return e === 'file';
  });
  let file2 = arTree2.filter((e) => {
    return e === 'file';
  });

  return file1.length === file2.length;
}


module.exports.fileFolder = fileFolder;