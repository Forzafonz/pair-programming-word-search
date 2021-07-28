const wordSearch = (letters, word) => {
    if (word === undefined || word === "" || letters.length === 0){
        return "Invalid input";
    }
   if (wordCheck(letters, word ) || wordCheck(transpose(letters), word)){
       return true;
   }
   return false;
}

const wordCheck = function(letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

const transpose = function(matrix) {

    let newArray = []; 
      let i = 0;
      while (i < matrix[0].length) { 
        newArray.push([]);
        i++;
      }
  
      for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
          newArray[column][row] = matrix[row][column];
        }
      }
      return newArray;
  };

module.exports = wordSearch
