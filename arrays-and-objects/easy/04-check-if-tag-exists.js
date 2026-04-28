/*
Problem: Check If Tag Exists

You are given a Set of tags and a target tag.

Return true if the target tag exists in the Set. Otherwise, return false.

Input:
tags = new Set(["js", "react", "node"])
targetTag = "react"

Output:
true

Function Signature:
function checkTagExists(tags, targetTag) {}

Notes:
- The Set may be empty.
- The target tag may not exist.
*/

function checkTagExists(tags, targetTag) {
    return tags.has(targetTag);
}