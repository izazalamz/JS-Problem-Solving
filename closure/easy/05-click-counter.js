/**
 * Problem 5: Click Counter (Simulated)
 * Difficulty: Easy
 *
 * Description:
 * Implement a function makeButton().
 *
 * It should return a function.
 * Each time the returned function is called, it logs:
 * "Clicked X times"
 *
 * X starts from 1 and increments on each call.
 * Each button must maintain its own count.
 */
function makeButton() {
  let count = 0;
  return () => {
    console.log(`Clicked ${++count} times`);
  };
}
const button1 = makeButton();
const button2 = makeButton();

button1(); // Clicked 1 times
button1(); // Clicked 2 times
button2(); // Clicked 1 times
button1(); // Clicked 3 times
button2(); // Clicked 2 times
