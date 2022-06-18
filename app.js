// const input = document.getElementById('name');
// const form = document.getElementById('form');
// const display = document.getElementById('display');

// function vowelCount(str) {
//   return str.match(/[aeiou]/g).length;
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   display.innerHTML = `<p>'This string has ${vowelCount(
//     input
//   )} vowels in it</p>`;
// });

document.getElementById('text').addEventListener('input', function (evt) {
  const original = this.value;
  const count = vowelsCounter4(original);
  document.getElementById('count').value = count;
});

// const isVowel = letter =>
//   ['a', 'e', 'i', 'o', 'u', 'ı', 'ü', 'ö'].includes(letter.toLowerCase())
//     ? 1
//     : 0;

// const vowelsCounter = text => {
//   return [...text].reduce((acum, cur) => acum + isVowel(cur), 0);
// };

// const vowelsCounter2 = text => {
//   let count = 0;
//   for (let letter of text) {
//     count += isVowel(letter);
//   }
//   return count;
// };

// const vowelsCounter3 = text => {
//   if (text.length == 0) return 0;
//   else return isVowel(text[0]) + vowelsCounter3(text.substr(1));
// };

const vowelsCounter4 = text => {
  let vowels = text.match(/[aeiouıüö]/gi);
  return vowels ? vowels.length : 0;
};
