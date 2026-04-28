/*
Problem: Find Users With Shared Interests

You are given an array of users. Each user has an `id`, `name`, and
`interests` array.

You are also given a target user id.

Return all users who share at least one interest with the target user.
The target user should not be included in the result.

Input:
users = [
  { id: 1, name: "Alice", interests: ["js", "react"] },
  { id: 2, name: "Bob", interests: ["python", "django"] },
  { id: 3, name: "Charlie", interests: ["react", "node"] },
  { id: 4, name: "David", interests: ["go", "docker"] },
]

targetId = 1

Output:
[
  { id: 3, name: "Charlie", interests: ["react", "node"] }
]

Function Signature:
function findUsersWithSharedInterests(users, targetId) {}

Notes:
- The target user may not exist.
- Some users may have no interests.
- The target user should be excluded from the output.
*/

const users = [
  { id: 1, name: "Alice", interests: ["js", "react"] },
  { id: 2, name: "Bob", interests: ["python", "django"] },
  { id: 3, name: "Charlie", interests: ["react", "node"] },
  { id: 4, name: "David", interests: ["go", "docker"] },
];
const targetId = 1;
function findUsersWithSharedInterests(users, targetId) {
  const targetUser = users.find((user) => user.id === targetId);
  if (!targetUser) return [];

  const targetInterests = new Set(targetUser.interests || []);

  return users.filter((user) => {
    if (user.id === targetId) return false;
    return (user.interests || []).some((interest) => {
      return targetInterests.has(interest);
    });
  });
}
console.log(findUsersWithSharedInterests(users, targetId));
