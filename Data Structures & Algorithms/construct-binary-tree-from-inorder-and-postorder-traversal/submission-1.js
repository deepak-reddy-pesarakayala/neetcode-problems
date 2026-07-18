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
    buildTree(inorder, postorder) {
        if (postorder.length === 0 || inorder.length === 0) {
            return null;
        }
        const rootVal = postorder[postorder.length - 1];
        const root = new TreeNode(rootVal);
        const mid = inorder.indexOf(rootVal);
        root.left = this.buildTree(
            inorder.slice(0, mid),
            postorder.slice(0, mid),
        );
        root.right = this.buildTree(
            inorder.slice(mid + 1),
            postorder.slice(mid, postorder.length - 1),
        );
        return root;
    }
}