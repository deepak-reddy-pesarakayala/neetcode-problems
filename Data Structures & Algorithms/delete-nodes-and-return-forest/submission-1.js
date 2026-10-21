class Solution {
    delNodes(root, to_delete) {
        const deleteSet = new Set(to_delete);
        const forest = [];
        const dfs = (node, isRoot) => {
            if (node === null) return null;
            const deleted = deleteSet.has(node.val);
            if (isRoot && !deleted) forest.push(node);
            node.left = dfs(node.left, deleted);
            node.right = dfs(node.right, deleted);
            return deleted ? null : node;
        };
        dfs(root, true);
        return forest;
    }
}