/*
Problem: Build User Lookup Map

You are given an array of user objects. Each user has a unique `id`.

Return a Map where each key is a user id and each value is the corresponding
user object.

Input:
users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]

Output:
Map {
  1 => { id: 1, name: "Alice" },
  2 => { id: 2, name: "Bob" }
}

Function Signature:
function buildUserLookupMap(users) {}

Notes:
- The array may be empty.
- User ids are expected to be unique.
*/

function buildUserLookupMap(users) {
  const lookupMap = new Map();
  users.forEach((user) => {
    const { id } = user;
    if (!lookupMap.has(id)) {
      lookupMap.set(id, user);
    }
  });
  return lookupMap;
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
console.log(buildUserLookupMap(users));
