const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let number = 0;

for(let i = 0; i < backyard.length; i ++){
  if(backyard[i] = '^^') number ++;
}
return number;
}

module.exports = {
  countCats
};
