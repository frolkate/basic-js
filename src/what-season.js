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


  console.log(date);

 if (Date.parse (date) == NaN){
  throw new Error ( 'Inavalid date!');
 }
 else {

  try {

    let month = date.getMonth();


    switch(true){
      case(0 <= month && month < 2 || month == 11): return 'winter'; break;
      case(2 <= month && month < 5): return 'spring';break;
      case(5 <= month && month < 8): return 'summer';break;
      case(8 <= month && month < 11): return 'autumn';break;
      }
    }
    catch(e){
      return 'Unable to determine the time of year!';
    }

  }

}

module.exports = {
  getSeason
};
