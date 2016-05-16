'use strict';

function double_to_one(collection) {
  var newArrays = [];
  var k = 0;

  for (var i = 0; i < collection.length; i++)
    for (var j = 0; j < collection[i].length; j++) {
      var exist = findElement(newArrays, collection[i][j]);
      if (!exist)
        newArrays[k++] = collection[i][j];
    }

  return newArrays;
}

function findElement(newArrays, key) {
  var exist;

  for (var i = 0; i < newArrays.length; i++)
    if (newArrays[i] === key)
      exist = 1;

  return exist;
}

module.exports = double_to_one;
