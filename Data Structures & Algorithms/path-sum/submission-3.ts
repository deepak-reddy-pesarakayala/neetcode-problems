class Solution {
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (root === null) return false;
        if (root.left === null && root.right === null) {
            return root.val === targetSum;
        }
        const remaining = targetSum - root.val;
        return this.hasPathSum(root.left, remaining) ||
               this.hasPathSum(root.right, remaining);
    }
}