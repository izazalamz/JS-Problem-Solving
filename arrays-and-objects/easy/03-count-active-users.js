/*
Problem: Count Active Users

You are given an array of user objects. Each user has an `id` and an `active`
property.

Return the number of users whose `active` property is true.

Input:
users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: false },
]

Output:
2

Function Signature:
function countActiveUsers(users) {}

Notes:
- The array may be empty.
- Some users may be inactive.
*/
const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
  { id: 4, active: false },
];

const countActiveUsers = (users)=>{
    const userCount = users.reduce((count, user)=>{
        if(user.active) count++;
        return count
    }, 0)
    return userCount
}
console.log(countActiveUsers(users));
