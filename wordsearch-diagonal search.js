const wordSearch = (letters, word) => {

  if (word === undefined || word === '' || letters.length === 0){
    return "Invalid input";
  }

  let sWord = word.split('');
    for (let i = 0; i <letters.length; i++){
        let row = letters[i];
        for (let j = 0; j < row.length; j++){
            const choices = [[-1, -1], [0, -1], [-1, 0], [0, 1], [1, 0], [1, 1], [1, -1], [-1, 1]];
            for (let choice of choices){
              let searchWord = sWord;
              if (letters[i][j] === sWord[0]){
                if (letCheck(letters, i, j, searchWord.slice(1), choice)){
                  return true;
                }
              }
            }
        }
    }
  return false;
  }

const letCheck = function (letters, row1, col1, sWord, choice){
  let row = row1 + choice[0];
  let col = col1 + choice[1];
  if (sWord.length === 0){
    return true;
  }
  if (row > letters.length - 1  || col > letters[0].length - 1 || row < 0 || col < 0 || letters[row][col] !== sWord[0]){
    return false;
  } else {
    if (letCheck(letters, row, col, sWord.slice(1), choice)){
      return true;
    }
  }
}

module.exports = wordSearch
