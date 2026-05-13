const sentence = ["sphinx", "of", "black", "quartz", "judge", "my", "vow"];
const isShort = (word) => word.length <= 3;

const filter = (array, fn) => {
  const output = [];
  for (const element of array) {
    if (fn(element)) {
      output.push(element);
    }
  }
  return output;
};
filter(sentence, isShort);
console.log(filter(sentence, isShort));

const getLength = (word) => word.length;

const map = (array, fn) => {
  const output = [];
  for (const element of array) {
    const result = fn(element);
    output.push(result);
  }
  return output;
};
map(sentence, getLegnth);
console.log(filter(sentence, getLegnth));

const addLength = (total, word) => total + word.length;

function reduce(array, fn, initial) {
  let accumulator = initial ?? array[0];
  for (const element of array) {
    accumulator = fn(accumulator, element);
  }
  return accumulator;
}
reduce(sentence, addLength, 0);
