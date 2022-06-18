document.getElementById('text').addEventListener('input', function (evt) {
  const original = this.value;
  const count = vowelsCounter(original);
  document.getElementById('count').value = count;
});

const vowelsCounter = text => {
  let vowels = text.match(/[aeiouıüö]/gi);
  return vowels ? vowels.length : 0;
};
