/*
Problem: Group Users By Role

You are given an array of user objects. Each user has an `id`, `name`, and
`role`.

Return an object where each key is a role and each value is an array of users
with that role.

Input:
users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
]

Output:
{
  admin: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 3, name: "Charlie", role: "admin" },
  ],
  user: [
    { id: 2, name: "Bob", role: "user" },
  ],
}

Function Signature:
function groupUsersByRole(users) {}

Notes:
- Multiple users may have the same role.
- The array may be empty.
*/
function groupUsersByRole(users) {
  const groupedUsersByRole = users.reduce((groups, user) => {
    const { role } = user;
    if (!groups[role]) {
      groups[role] = [];
    }
    groups[role].push(user);

    return groups;
  }, {});
  return groupedUsersByRole;
}
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
];
console.log(groupUsersByRole(users));
