/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    lowestCommonAncestor(root, p, q) {
        const parent = new Map();
        parent.set(root, null);
        const stack = [root];
        while (!parent.has(p) || !parent.has(q)) {
            const node = stack.pop();
            if (node.left !== null) {
                parent.set(node.left, node);
                stack.push(node.left);
            }
            if (node.right !== null) {
                parent.set(node.right, node);
                stack.push(node.right);
            }
        }
        const ancestors = new Set();
        while (p !== null) {
            ancestors.add(p);
            p = parent.get(p);
        }
        while (!ancestors.has(q)) {
            q = parent.get(q);
        }

        return q;
    }
}