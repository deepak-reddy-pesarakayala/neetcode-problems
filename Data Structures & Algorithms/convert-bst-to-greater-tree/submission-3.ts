class Solution {
    convertBST(root: TreeNode | null): TreeNode | null {
        let sum = 0;

        const dfs = (node: TreeNode | null): void => {
            if (node === null) return;

            dfs(node.right);

            sum += node.val;
            node.val = sum;

            dfs(node.left);
        };

        dfs(root);
        return root;
    }
}