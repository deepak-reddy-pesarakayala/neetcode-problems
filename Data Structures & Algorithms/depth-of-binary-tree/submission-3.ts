class Solution {
    maxDepth(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }
        const leftDepth = this.maxDepth(root.left);
        const rightDepth = this.maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }
}
