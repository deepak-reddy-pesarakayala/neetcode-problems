class Solution {
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (subRoot === null) {
            return true;
        }
        if (root === null) {
            return false;
        }
        if (this.sameTree(root, subRoot)) {
            return true;
        }
        return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right, subRoot);
    }
    private sameTree(
        root1: TreeNode | null,
        root2: TreeNode | null
    ): boolean {
        if (root1 === null && root2 === null) {
            return true;
        }
        if (root1 === null || root2 === null) {
            return false;
        }
        if (root1.val !== root2.val) {
            return false;
        }
        return this.sameTree(root1.left, root2.left) &&
               this.sameTree(root1.right, root2.right);
    }
}
