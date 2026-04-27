/**
 * Problem 3: Multiplier Factory
 * Difficulty: Easy
 *
 * Description:
 * Implement a function createMultiplier(n).
 *
 * It should return a function that takes a number x
 * and returns x multiplied by n.
 *
 * Each multiplier should retain its own value of n.
 */
const createMultiplier = (factor) => {
  return (x) => {
    return factor * x;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(double(0)); // 0
console.log(triple(4)); // 12
console.log(triple(1)); // 3
