class Solution {
    trimBST(root, low, high) {
        if (root === null) {
            return null;
        }

        if (root.val < low) {
            return this.trimBST(root.right, low, high);
        }

        if (root.val > high) {
            return this.trimBST(root.left, low, high);
        }

        root.left = this.trimBST(root.left, low, high);
        root.right = this.trimBST(root.right, low, high);

        return root;
    }
}