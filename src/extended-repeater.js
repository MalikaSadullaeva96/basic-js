const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  let strSeperator = '';
  let result = '';
  if(obj.separator === undefined){
      obj.separator = '+';
  }
  if(obj.additionRepeatTimes !== undefined && obj.additionSeparator===undefined){
      obj.additionSeparator = '|';
  }
  if(obj.additionRepeatTimes === undefined && obj.addition!==undefined){
      strSeperator += obj.addition;
  }
  if(obj.repeatTimes === undefined){
      result += str + strSeperator;
  }

  for (let j = 0; j < obj.additionRepeatTimes; j++) {
    if (j !== 0) {
      strSeperator += obj.additionSeparator;
    }
    strSeperator += obj.addition;
  }

  for (let i = 0; i < obj.repeatTimes; i++) {
    if (i !== 0) {
      result += obj.separator;
    }
    result += str + strSeperator;
  }
  console.log(result);
 return result;
}

module.exports = {
  repeater
};
