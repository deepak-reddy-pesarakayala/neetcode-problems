class Solution {
    isValidBST(root: TreeNode | null): boolean {
        return this.validate(root, -Infinity, Infinity);
    } 
    private validate(
        node: TreeNode | null,
        min: number,
        max: number
    ): boolean {
        if (node === null) {
            return true;
        }
        if (node.val <= min || node.val >= max) {
            return false;
        }
        return this.validate(node.left, min, node.val) &&
               this.validate(node.right, node.val, max);
    }
}

