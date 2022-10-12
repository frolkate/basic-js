const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members) {

  let nameTeam = [];
  let nameT = "";

  function isL (b){
   return b.toUpperCase() != b.toLowerCase();
  }

  if(members != null) {

  for(let i = 0; i < members.length; i ++){

  if (members[i] != null && typeof members[i] == 'string') {

   members[i] =  members[i].toString().trimStart();
   members[i] = members[i].toString().trimEnd();

   if(members[i].length != 0 && isL(members[i][0])){
      nameTeam.push(members[i][0].toString().toUpperCase());
    }

}
  }
  nameTeam.sort();

  for(let i = 0;  i < nameTeam.length; i ++){
    nameT += nameTeam[i];
  }

  return nameT;
} else
return false;
}

module.exports = {
  createDreamTeam
};
