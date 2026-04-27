/**
 * Problem 1: Find User by ID
 * Difficulty: Easy
 *
 * Description:
 * Implement a function findUserById(users, id).
 *
 * Given an array of user objects, return the user object
 * with the matching id.
 *
 * If no user is found, return null.
 *
 * Input:
 * users: Array<{ id: number, name: string }>
 * id: number
 *
 * Output:
 * The matching user object or null if not found.
 *
 * Example:
 * const users = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" }
 * ];
 *
 * findUserById(users, 2)
 * // { id: 2, name: "Bob" }
 *
 * findUserById(users, 5)
 * // null
 */

function findUserById(users, id) {
    const foundUser = users.find((user)=> user.id === id)
    if (!foundUser) return null
        return foundUser
}
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  console.log(findUserById(users, 2));