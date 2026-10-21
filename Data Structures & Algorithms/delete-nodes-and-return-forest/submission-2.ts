class Solution {
    delNodes(root: TreeNode | null, to_delete: number[]): TreeNode[] {
        const deleted = new Set(to_delete);
        const forest: TreeNode[] = [];

        const dfs = (node: TreeNode | null, isRoot: boolean): TreeNode | null => {
            if (node === null) return null;

            const remove = deleted.has(node.val);

            if (isRoot && !remove) {
                forest.push(node);
            }

            node.left = dfs(node.left, remove);
            node.right = dfs(node.right, remove);

            return remove ? null : node;
        };

        dfs(root, true);
        return forest;
    }
}