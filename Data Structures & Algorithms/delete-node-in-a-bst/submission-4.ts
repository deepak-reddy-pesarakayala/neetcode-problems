class Solution {
    deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if (root === null) return null;
        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;
            let successor = root.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
            root.val = successor.val;
            root.right = this.deleteNode(root.right, successor.val);
        }
        return root;
    }
}