const mainForm = document.getElementById('mainForm');
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const input = document.getElementById('word');
const answerLine = document.getElementById('answer');
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const str = input.value.toLowerCase();
  const strArray = str.split(/(?!$)/u);
  let letterInfoArray = [];
  letters.forEach((letter) => {
    const occurences = countOccurrences(strArray, letter);
    const getIndex = () => {
      if (occurences === 1) {
        return strArray.indexOf(letter);
      } else {
        return null;
      }
    };
    letterInfoArray.push({
      character: letter,
      occurences,
      letterIndex: getIndex(),
    });
  });
  finalResultantLetter = letterInfoArray
    .sort((a, b) => a.letterIndex - b.letterIndex)
    .find((i) => i.letterIndex !== null);

  if (finalResultantLetter) {
    answerLine.innerText = `${finalResultantLetter.character} is the first letter that is repeated only once`;
  } else {
    answerLine.innerText = `There is no such letter`;
  }
});
