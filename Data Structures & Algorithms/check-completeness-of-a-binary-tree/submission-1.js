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
    isCompleteTree(root) {
        const queue = new Queue([root]);
        while (!queue.isEmpty()) {
            const node = queue.pop();
            if (node) {
                queue.push(node.left);
                queue.push(node.right);
            } else {
                while (!queue.isEmpty()) {
                    if (queue.pop()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}