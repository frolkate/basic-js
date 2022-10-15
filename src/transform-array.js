const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {

  if(!Array.isArray(array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let arr = array;

let count = 0;

  for(let i = 0; i < arr.length; i ++){
    switch (arr[i]){
      case '--discard-next':{
        if(i != arr.length - 1){
          count = i - 1;
          arr[i + 1] = null;
          arr.splice(i, 1);
          i = count;
        }
        else
          arr.splice(i, 1);
        break;
      }
      case '--discard-prev':{
        if (i != 0){
          count = i - 1;
          arr[i - 1] = null;
          arr.splice(i, 1);
        i = count;
        }
        else
          arr.splice(i, 1);
        break;
      }
      case '--double-next':{
        if(i != arr.length - 1){
        arr[i] = arr [i + 1];
        }
        else
          arr.splice(i, 1);
        break;
      }
      case '--double-prev':{
        if(i != 0){
        arr[i] = arr[i - 1];
        }
            else
          arr.splice(i, 1);
        break;
      }

    }
  }

  for (let i = 0; i < arr.length; i ++){
    if(arr[i] == null) {
      count = i;
      arr.splice(i, 1);
      i = count - 1;
    }
  }
  return arr;

}

module.exports = {
  transform
};
