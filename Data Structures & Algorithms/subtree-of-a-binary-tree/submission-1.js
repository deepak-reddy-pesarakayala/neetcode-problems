/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    isSubtree(root, subRoot) {
        if (subRoot === null) {
            return true;
        }
        if (root === null) {
            return false;
        }
        if (this.isSame(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right, subRoot);
    }
    isSame(a, b) {
        if (a === null && b === null) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        if (a.val !== b.val) {
            return false;
        }
        return this.isSame(a.left, b.left) &&
               this.isSame(a.right, b.right);
    }
}