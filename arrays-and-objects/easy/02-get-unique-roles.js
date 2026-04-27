/**
 * Problem 2: Get Unique Roles
 * Difficulty: Easy
 *
 * Description:
 * Implement a function getUniqueRoles(users).
 *
 * Each user has a roles array.
 * Return an array of unique roles across all users.
 *
 * Input:
 * users: Array<{ id: number, roles: string[] }>
 *
 * Output:
 * string[] (array of unique roles)
 *
 * Example:
 * const users = [
 *   { id: 1, roles: ["admin", "editor"] },
 *   { id: 2, roles: ["viewer"] },
 *   { id: 3, roles: ["editor", "viewer"] }
 * ];
 *
 * getUniqueRoles(users)
 * // ["admin", "editor", "viewer"]
 */
const users = [
    { id: 1, roles: ["admin", "editor"] },
    { id: 2, roles: ["viewer"] },
    { id: 3, roles: ["editor", "viewer"] }
  ];
function getUniqueRoles(users) {
    const uniqueRoles = new Set()
    users.forEach(user => {
        const { roles } = user
        roles.forEach((role)=>{
            uniqueRoles.add(role)
        })
    });
    return [...uniqueRoles]
}
console.log(getUniqueRoles(users));