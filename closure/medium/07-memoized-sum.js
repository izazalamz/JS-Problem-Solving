/**
 * Problem 7: Memoized Sum
 * Difficulty: Medium
 *
 * Description:
 * Implement a function memoizeSum().
 *
 * It should return a function that takes a number x
 * and returns the sum of all integers from 1 to x.
 *
 * Use caching (memoization) so repeated calls with the same x
 * do not recompute the result.
 */
function memoizeSum() {
  const sums = {};
  return (x) => {
    if (sums[x]) {
      return sums[x];
    } else {
      let res = 0;
      for (let i = 1; i <= x; i++) {
        res += i;
      }
      sums[x] = res;
      return res;
    }
  };
}
const sum = memoizeSum();

console.log(sum(5)); // 15
console.log(sum(10)); // 55
console.log(sum(5)); // 15 (should be retrieved from cache)
console.log(sum(10)); // 55 (cached)
