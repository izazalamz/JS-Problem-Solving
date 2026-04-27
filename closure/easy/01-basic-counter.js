/**
 * Problem 1: Basic Counter
 * Difficulty: Easy
 *
 * Description:
 * Implement a function createCounter().
 * It should return a function.
 * Each time the returned function is called, it returns
 * the next integer starting from 1.
 *
 * Each counter must be independent.
 */

function createCounter() {
  let count = 0;
  return () => ++count;
}

// Test Cases
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1
