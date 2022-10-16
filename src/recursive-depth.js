const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth( arr ) {
      let count = 1;
      let countArr = [];

      function deep(mass){

          for(let j = 0; j < mass.length; j ++)
            {
                if (Array.isArray(mass[j])){
                  count++;
                  deep(mass[j]);
                   countArr.push(count);
                   count = 1;

            }

            }
            return count;
          }
      deep(arr);
      return (Math.max(...countArr));
  }
}

module.exports = {
  DepthCalculator
};
