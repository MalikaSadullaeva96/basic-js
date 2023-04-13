const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let indexToRemove;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      indexToRemove = i;
      break;
    }
    if (i === arr.length - 2) {
      indexToRemove = arr.length - 1;
    }
  }
  arr.splice(indexToRemove, 1);
  return parseInt(arr.join(''));
}

module.exports = {
  deleteDigit
};
