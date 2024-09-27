"use strict";

var array = [Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]), Number(process.argv[5]), Number(process.argv[6]), Number(process.argv[7]), Number(process.argv[8]), Number(process.argv[9]), Number(process.argv[10]), Number(process.argv[11]), Number(process.argv[12]), Number(process.argv[13]), Number(process.argv[14])];

function bubbleSort(arr) {
  var noChange = true;

  for (var i = array.length; i > 1; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noChange = false;
      }
    }

    if (noChange) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort(array));