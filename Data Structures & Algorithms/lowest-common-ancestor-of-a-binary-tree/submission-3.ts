class Solution {
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
        if (root === null || root === p || root === q) return root;
        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);
        if (left !== null && right !== null) return root;
        return left !== null ? left : right;
    }
}