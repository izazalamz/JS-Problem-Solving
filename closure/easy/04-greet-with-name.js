/**
 * Problem 4: Greeting with Name
 * Difficulty: Easy
 *
 * Description:
 * Implement a function greetWithName(greeting).
 *
 * It should return a function.
 * The returned function takes a name and logs:
 * `${greeting}, ${name}!`
 */
const greetWithName = (greeting) => {
  return (name) => {
    console.log(`${greeting}, ${name}!`);
  };
};
const greetHello = greetWithName("Hello");
const greetHi = greetWithName("Hi");

greetHello("Alice"); // Hello, Alice!
greetHello("Bob"); // Hello, Bob!
greetHi("Charlie"); // Hi, Charlie!
