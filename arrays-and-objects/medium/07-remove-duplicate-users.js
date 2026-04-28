/*
Problem: Remove Duplicate Users

You are given an array of user objects. Some users may appear more than once
with the same `id`.

Return a new array containing only one user per unique id.

Input:
users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
]

Output:
[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]

Function Signature:
function removeDuplicateUsers(users) {}

Notes:
- Duplicate ids may appear more than once.
- Keep the first occurrence of each user.
*/
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
];
function removeDuplicateUsers(users) {
    const seen = new Set //tracker only uses user id, not the whole object
    const uniqueUsers = []
    for (const user of users){
        if(!seen.has(user.id)){
            seen.add(user.id)
            uniqueUsers.push(user)
        }
    }
    return uniqueUsers
}
console.log(removeDuplicateUsers(users))