document.getElementById('text').addEventListener('input', function (evt) {
  const original = this.value;
  const count = vowelsCounter4(original);
  document.getElementById('count').value = count;
});

const vowelsCounter4 = text => {
  let vowels = text.match(/[aeiouıüö]/gi);
  return vowels ? vowels.length : 0;
};
