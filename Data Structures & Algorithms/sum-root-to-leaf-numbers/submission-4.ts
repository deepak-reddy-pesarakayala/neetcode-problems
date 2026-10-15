class Solution {
    sumNumbers(root: TreeNode | null): number {
        const dfs = (node: TreeNode | null, current: number): number => {
            if (node === null) return 0;
            const value = current * 10 + node.val;
            if (node.left === null && node.right === null) return value;
            return dfs(node.left, value) + dfs(node.right, value);
        };
        return dfs(root, 0);
    }
}