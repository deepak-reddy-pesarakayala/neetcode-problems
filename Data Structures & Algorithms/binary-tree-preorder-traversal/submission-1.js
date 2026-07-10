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
    preorderTraversal(root) {
        const result = [];
        function preorder(node) {
            if (node === null) {
                return;
            }
            result.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
        preorder(root);
        return result;
    }
}