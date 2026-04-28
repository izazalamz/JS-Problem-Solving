/*
Problem: Merge User Data

You are given two arrays:

1. users - contains user id and name
2. profiles - contains user id and extra profile information

Return a new array where each user is merged with their matching profile data.

Input:
users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
]

profiles = [
  { userId: 1, city: "Dhaka" },
  { userId: 2, city: "Chittagong" },
]

Output:
[
  { id: 1, name: "Alice", userId: 1, city: "Dhaka" },
  { id: 2, name: "Bob", userId: 2, city: "Chittagong" },
]

Function Signature:
function mergeUserData(users, profiles) {}

Notes:
- A user may not have a matching profile.
- The original arrays should not be modified.
*/
function mergeUserData(users, profiles) {
  const merged = [];
  for (const user of users) {
    const { id, name } = user;
    const profile = profiles.find((profile) => profile.userId === id);
    if (!profile) {
      merged.push({ id, name });
      continue;
    }
    merged.push({ id, name, userId: profile.userId, city: profile.city });
  }
  return merged;
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const profiles = [
  { userId: 1, city: "Dhaka" },
  { userId: 2, city: "Chittagong" },
];
console.log(mergeUserData(users, profiles));
