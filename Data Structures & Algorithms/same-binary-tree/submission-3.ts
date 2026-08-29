class Solution {
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (p === null && q === null) {
            return true;
        }
        if (p === null || q === null) {
            return false;
        }
        if (p.val !== q.val) {
            return false;
        }
        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}
