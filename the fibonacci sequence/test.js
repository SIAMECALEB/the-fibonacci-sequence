// test.js

const { fibs, fibsRec } = require('./fibonacci');
const mergeSort = require('./mergeSort');

console.log("Iterative Fibonacci (8):", fibs(8));
console.log("Recursive Fibonacci (8):", fibsRec(8));

console.log("\nMerge Sort Tests:");
console.log(mergeSort([])); // []
console.log(mergeSort([73])); // [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
