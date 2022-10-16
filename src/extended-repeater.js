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
function repeater(str, options ) {


  let separator = '';
   if( options.separator == undefined)
    separator = '+';
  else
   separator = options.separator;

  let additionSeparator = '';
   if( options.additionSeparator == undefined)
     additionSeparator = '|';
  else
   additionSeparator = options.additionSeparator;

  let additionRepeatTimes  = '';
   if(options.additionRepeatTimes == undefined)
   additionRepeatTimes  = 1;
  else
    additionRepeatTimes= options.additionRepeatTimes;


  let repeatTimes  = '';
   if(options.repeatTimes == undefined)
   repeatTimes  = 1;
  else
    repeatTimes= options.repeatTimes;


  for(let i = 0; i < additionRepeatTimes; i ++){

    if(options.addition != undefined){
    str += options.addition;
    if(additionRepeatTimes > 1)
    str += additionSeparator;
    }
  }


  if(additionRepeatTimes > 1)
    str = str.slice(0, str.length - additionSeparator.length);

  str += separator;

  str =  str.repeat(repeatTimes);


  return str.slice(0, str.length - separator.length);


}

module.exports = {
  repeater
};
