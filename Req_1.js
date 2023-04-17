const array = ['a', 10, 'b', 'hola', 122, 15];

const letters = [];
const numbers = [];

let highestNumber = -Infinity;

array.forEach((element) => {
  if (typeof element === 'string') {
    letters.push(element);
  } else if (typeof element === 'number') {
    numbers.push(element);
    highestNumber = Math.max(highestNumber, element);
  }
});

console.log(letters);
console.log(numbers);
console.log(highestNumber);
