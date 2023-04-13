const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let arr;
  let word;
  let count = 0;
  if (s2.length > s1.length) {
    arr = s1.split('');
    word = s2;
  } else {
    arr = s2.split('');
    word = s1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (word.includes(arr[i])) {
      count++;
      word = word.replace(new RegExp(arr[i], ''), '');
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
