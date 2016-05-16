'use strict';

function double_to_one(collection) {
  var newArray = [];
  var k = 0;

  newArray[k++] = collection[0];
  for (var i = 1; i < collection.length; i++)
    for (var j = 0; j < collection[i].length; j++)
      newArray[k++] = collection[i][j];

  return newArray;
}

module.exports = double_to_one;
