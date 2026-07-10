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
    hasPathSum(root, targetSum) {
        if (root === null) {
            return false;
        }
        if (root.left === null && root.right === null) {
            return targetSum === root.val;
        }
        const remainingSum = targetSum - root.val;
        return this.hasPathSum(root.left, remainingSum) ||
               this.hasPathSum(root.right, remainingSum);
    }
}