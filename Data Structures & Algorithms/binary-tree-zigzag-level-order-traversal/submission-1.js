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
    zigzagLevelOrder(root) {
        const res = [];
        if (!root) return res;
        const queue = new Queue([root]);
        while (!queue.isEmpty()) {
            const level = [];
            for (let i = queue.size(); i > 0; i--) {
                const node = queue.pop();
                level.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            if (res.length % 2 !== 0) level.reverse();
            res.push(level);
        }
        return res;
    }
}