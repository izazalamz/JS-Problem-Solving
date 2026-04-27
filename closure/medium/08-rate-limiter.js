/**
 * Problem 8: Rate Limiter (Simple)
 * Difficulty: Medium
 *
 * Description:
 * Implement a function createRateLimiter(limit).
 *
 * It should return a function that takes a callback.
 *
 * The callback should only execute if it has been called
 * fewer than limit times.
 *
 * If the limit is reached, log:
 * "Rate limit exceeded"
 */
function createRateLimiter(limit) {
  let callCount = 0;
  return (callback) => {
    if (callCount < limit) {
      callback();
      callCount++;
    } else {
      console.log("Rate limit exceeded");
    }
  };
}
const limiter = createRateLimiter(2);

limiter(() => console.log("Run 1")); // Run 1
limiter(() => console.log("Run 2")); // Run 2
limiter(() => console.log("Run 3")); // Rate limit exceeded
limiter(() => console.log("Run 4")); // Rate limit exceeded
