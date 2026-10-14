class Solution {
    goodNodes(root: TreeNode | null): number {
        const dfs = (node: TreeNode | null, maxVal: number): number => {
            if (node === null) return 0;
            let count = node.val >= maxVal ? 1 : 0;
            const newMax = Math.max(maxVal, node.val);
            count += dfs(node.left, newMax);
            count += dfs(node.right, newMax);
            return count;
        };
        return root === null ? 0 : dfs(root, root.val);
    }
}