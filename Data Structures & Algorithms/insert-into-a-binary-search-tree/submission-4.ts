class Solution {
    insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
        if (root === null) return new TreeNode(val);
        if (val < root.val) {
            root.left = this.insertIntoBST(root.left, val);
        } else {
            root.right = this.insertIntoBST(root.right, val);
        }
        return root;
    }
}