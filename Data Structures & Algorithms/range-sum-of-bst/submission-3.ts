class Solution {
    rangeSumBST(root: TreeNode | null, low: number, high: number): number {
        if (root === null) return 0;
        if (root.val < low) return this.rangeSumBST(root.right, low, high);
        if (root.val > high) return this.rangeSumBST(root.left, low, high);
        return root.val +
            this.rangeSumBST(root.left, low, high) +
            this.rangeSumBST(root.right, low, high);
    }
}