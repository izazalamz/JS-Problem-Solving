/**
 * Problem 6: Independent Counters
 * Difficulty: Medium
 *
 * Description:
 * Implement a function createCounters(n).
 *
 * It should return an array of n functions.
 * Each function behaves like an independent counter:
 * - Each call returns an incrementing number starting from 1
 *
 * All counters must be completely independent.
 */
function createCounters(n) {
  function counter() {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  }
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = counter();
  }

  return arr;
}
const counters = createCounters(3);

console.log(counters[0]()); // 1
console.log(counters[0]()); // 2
console.log(counters[1]()); // 1
console.log(counters[2]()); // 1
console.log(counters[1]()); // 2
console.log(counters[0]()); // 3
