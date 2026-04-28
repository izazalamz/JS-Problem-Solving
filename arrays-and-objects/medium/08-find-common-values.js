/*
Problem: Find Common Values

You are given two arrays of values.

Return an array containing the values that appear in both arrays.

Input:
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]

Output:
[3, 4]

Function Signature:
function findCommonValues(arr1, arr2) {}

Notes:
- Either array may be empty.
- The output should not contain duplicate values.
*/

function findCommonValues(arr1, arr2) {
    const commonValues = []
    const checked = new Set(arr1)
    for (const value in arr2){
        if (checked.has(value)){
            commonValues.push(value)
        }
    }
    return commonValues
}
const arr1 = [1, 2, 3, 4]
const arr2 = [3, 4, 5, 6]

console.log(findCommonValues(arr1, arr2))