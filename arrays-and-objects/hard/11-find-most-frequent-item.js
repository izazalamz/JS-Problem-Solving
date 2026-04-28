/*
Problem: Find Most Frequent Item

You are given an array of values.

Return the value that appears the most times in the array.

Input:
items = ["a", "b", "a", "c", "b", "a"]

Output:
"a"

Function Signature:
function findMostFrequentItem(items) {}

Notes:
- The array may contain one item.
- If multiple values have the same highest frequency, return the one that
  appears first.
*/
function findMostFrequentItem(items) {
  const itemCount = new Map();
  if (items.length === 0) return undefined;
  let maxItem;
  let maxCount = 0;
  items.forEach((item) => {
    const count = (itemCount.get(item) ?? 0) + 1;
    itemCount.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      maxItem = item;
    }
  });
  return maxItem;
}
const items = ["a", "b", "a", "c", "b", "a"];
console.log(findMostFrequentItem(items));
