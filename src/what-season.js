const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (date.toString() === new Date().toString()) {
    throw new Error('Invalid date!');
  }

  let season = date.getMonth();
  if (season === 0 || season === 1 || season === 11) {
    return 'winter';
  } else if (season === 2 || season === 3 || season === 4) {
    return 'spring';
  } else if (season === 5 || season === 6 || season === 7) {
    return 'summer';
  } else if (season === 8 || season === 9 || season === 10) {
    return 'autumn';
  }
}
module.exports = {
  getSeason
};
