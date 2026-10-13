class Solution {
    rightSideView(root: TreeNode | null): number[] {
        const result: number[] = [];
        const dfs = (node: TreeNode | null, depth: number): void => {
            if (node === null) return;
            if (depth === result.length) result.push(node.val);
            dfs(node.right, depth + 1);
            dfs(node.left, depth + 1);
        };
        dfs(root, 0);
        return result;
    }
}