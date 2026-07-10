/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    connect(root) {
        if (root === null) {
            return null;
        }
        let leftMost = root;
        while (leftMost.left !== null) {
            let current = leftMost;
            while (current !== null) {
                current.left.next = current.right;
                if (current.next !== null) {
                    current.right.next = current.next.left;
                }
                current = current.next;
            }
            leftMost = leftMost.left;
        }
        return root;
    }
}