class Solution {
    removeLeafNodes(root, target) {
        if (root === null) {
            return null;
        }

        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);

        if (root.left === null && root.right === null && root.val === target) {
            return null;
        }

        return root;
    }
}