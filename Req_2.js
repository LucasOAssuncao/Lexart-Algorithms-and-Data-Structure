const functions = {
  addition: (...arr) => arr.reduce((acc, val) => acc + val, 0),
  subtraction: (...arr) => arr.reduce((acc, val) => acc - val),
  multiplication: (...arr) => arr.reduce((acc, val) => acc * val, 1),
  division: (a, b) => (b === 0 ? undefined : a / b),
};
