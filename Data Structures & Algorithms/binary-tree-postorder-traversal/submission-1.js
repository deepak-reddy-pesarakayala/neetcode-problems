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
    postorderTraversal(root) {
        const result = [];
        function postorder(node) {
            if (node === null) {
                return;
            }
            postorder(node.left);
            postorder(node.right);
            result.push(node.val);
        }
        postorder(root);
        return result;
    }
}