/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    postorder(root) {
        const result = [];
        function dfs(node) {
            if (node === null) return;
            for (const child of node.children) {
                dfs(child);
            }
            result.push(node.val);
        }
        dfs(root);
        return result;
    }
}