const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {

  let a = parseFloat (sampleActivity);

  if (sampleActivity != null && Number.isInteger(parseFloat (sampleActivity[0])) && a > 0 && a < 15 && typeof sampleActivity == "string") {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let number = Math.ceil(Math.log(MODERN_ACTIVITY / a) / k);

    return number;
  } else
  return false;


}

module.exports = {
  dateSample
};
