class Solution {
    removeLeafNodes(root, target) {
        if (!root) return null;
        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);
        if (
            !root.left &&
            !root.right &&
            root.val === target
        ) {
            return null;
        }
        return root;
    }
}