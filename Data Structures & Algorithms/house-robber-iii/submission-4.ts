class Solution {
    rob(root: TreeNode | null): number {
        const dfs = (node: TreeNode | null): [number, number] => {
            if (node === null) return [0, 0];

            const left = dfs(node.left);
            const right = dfs(node.right);

            const robCurrent = node.val + left[1] + right[1];
            const skipCurrent = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

            return [robCurrent, skipCurrent];
        };

        const result = dfs(root);
        return Math.max(result[0], result[1]);
    }
}