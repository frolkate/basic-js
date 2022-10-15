const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain : '',
  count: 0,

  getLength() {
   return this.count;
  },

  addLink(value) {

    this.chain+=`~( ${value} )~`;
    this.count ++;
    return this;
  },
  removeLink(position) {
   if(typeof position != 'number' || position == 0 || position > this.count){
      throw new Error ("You can't remove incorrect link!");

    }
    else{

        let arr = this.chain.split('~');

       arr.splice(2 * (position - 1), 2);
       this.chain = arr.join('~');

        this.count --;

    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~').reverse().join('~');
    return this;
  },
  finishChain() {
   this.chain = this.chain.slice(-this.chain.length + 1);
   this.chain = this.chain.slice(0, -1);
   try{
   return this.chain;
   }
   catch(e){
    this.chain = '';
   }
  }
};

module.exports = {
  chainMaker
};
