const transpose = require('/vagrant/async/matrix_transposition');

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch; 