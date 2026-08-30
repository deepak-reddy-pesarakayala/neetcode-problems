class Solution {
    maxPathSum(root: TreeNode | null): number {
        let maxSum = -Infinity;
        const dfs = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }
            const left = Math.max(0, dfs(node.left));
            const right = Math.max(0, dfs(node.right));
            maxSum = Math.max(maxSum, node.val + left + right);
            return node.val + Math.max(left, right);
        };
        dfs(root);
        return maxSum;
    }
}
