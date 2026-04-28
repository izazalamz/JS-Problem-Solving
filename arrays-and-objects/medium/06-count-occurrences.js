/*
Problem: Count Occurrences With Map

You are given an array of strings.

Return a Map where each key is a string from the array and each value is the
number of times that string appears.

Input:
items = ["apple", "banana", "apple", "orange", "banana", "apple"]

Output:
Map {
  "apple" => 3,
  "banana" => 2,
  "orange" => 1
}

Function Signature:
function countOccurrences(items) {}

Notes:
- The array may contain repeated strings.
- The array may be empty.
*/

function countOccurrences(items) {
    const occurrenceCount = new Map();
    items.forEach(item => {
        occurrenceCount.set(item, (occurrenceCount.get(item) || 0) +1)
        
    });
    return occurrenceCount
}

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(items))