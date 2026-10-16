class Solution {
    flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
        if (root1 === null || root2 === null) {
            return root1 === root2;
        }

        if (root1.val !== root2.val) return false;

        return (
            (this.flipEquiv(root1.left, root2.left) &&
             this.flipEquiv(root1.right, root2.right)) ||
            (this.flipEquiv(root1.left, root2.right) &&
             this.flipEquiv(root1.right, root2.left))
        );
    }
}