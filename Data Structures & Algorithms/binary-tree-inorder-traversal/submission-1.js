/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class Solution {
    inorderTraversal(root) {
        const result = [];
        function inorder(node) {
            if (node === null) {
                return;
            }
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
        inorder(root);
        return result;
    }
}