class Solution {
    rob(root) {
        function dfs(node) {
            if (node === null) {
                return [0, 0];
            }

            let left = dfs(node.left);
            let right = dfs(node.right);

            let robNode = node.val + left[1] + right[1];

            let skipNode = Math.max(left[0], left[1]) +
                           Math.max(right[0], right[1]);

            return [robNode, skipNode];
        }

        let result = dfs(root);
        return Math.max(result[0], result[1]);
    }
}