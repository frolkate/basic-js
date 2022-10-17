const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  vigenereSquare = {
    'A': [],
    'B': [],
    'C': [],
    'D': [],
    'E': [],
    'F': [],
    'G': [],
    'H': [],
    'I': [],
    'J': [],
    'K': [],
    'L': [],
    'M': [],
    'N': [],
    'O': [],
    'P': [],
    'Q': [],
    'R': [],
    'S': [],
    'T': [],
    'U': [],
    'V': [],
    'W': [],
    'X': [],
    'Y': [],
    'Z': []
  }
     setVigenereSquare (){


    let  vigenereSquareLetters = Object.keys(this.vigenereSquare);
    let j = 0;

    for(let i = 0; i < 26; i ++){
       j = i;
  while (this.vigenereSquare[vigenereSquareLetters[i]].length < 25){      this.vigenereSquare[vigenereSquareLetters[i]].push(vigenereSquareLetters[j]);
    j++;
    if(j == 26) j = 0;
      }

    }
   }


   isLetter(symbol){
     return symbol.toUpperCase() != symbol.toLowerCase();
   }



  encrypt(message, key) {

    this.setVigenereSquare();

    //console.log(this.vigenereSquare['D']);
  // console.log(this.vigenereSquare['A'].indexOf(''));
    let lengthWord = message.length;
    let word = '';
    let i = 0;
    let encryptWord = '';
    let j = 0;

    while(word.length < lengthWord){

      if(this.isLetter(message[j])){
        word += key[i];
      }
      else {
        word += message[j];
        i--;

      }
      j++;
      if(i == key.length - 1 ) i = 0;
      else i ++;


      }
    message = message.toUpperCase();
    word = word.toUpperCase();


        for(let i = 0; i < lengthWord; i ++){
           if(this.isLetter(word[i])){

          let ind = this.vigenereSquare['A'].indexOf(word[i]);
          encryptWord+= this.vigenereSquare[message[i]][ind];
           }
          else
             encryptWord+= word[i];
        }

    return encryptWord;
  }
  decrypt(encryptedMessage, key) {

  }
}

module.exports = {
  VigenereCipheringMachine
};
