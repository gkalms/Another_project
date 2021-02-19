// Capitalize
const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };
  
  // Make me sound more excited!
  const excitedWords = (word) => {
    return word + "!";
  };
// Higher order function
const handleWords = (str, callbackFn) => {
  const arr = str.split(" "); // str => "Ash Stacey Chelsie"
  // arr => ["Ash", "Stacey", "Chelsie"]

  // A new array []
  const newArr = [];

  for (let word of arr) {
    // 1st time -> Ash, 2nd time -> Stacey
    const modifiedWord = callbackFn(word);
    newArr.push(modifiedWord);
  }

  return newArr.join(" ");
};

const test1 = handleWords("Hello how are you?", capitalize);
const test2 = handleWords("Hello how are you?", excitedWords);
console.log(test1);
console.log(test2);

const test3 = handleWords(
  handleWords("omg hi how are you", capitalize),excitedWords
);

console.log(test3);
