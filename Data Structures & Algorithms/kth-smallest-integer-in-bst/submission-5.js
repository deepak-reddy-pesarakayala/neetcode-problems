class Solution {
    kthSmallest(root, k) {
        let count = 0;
        let result = 0;

        function inorder(node) {
            if (node === null) return false;

            if (inorder(node.left)) return true;

            count++;

            if (count === k) {
                result = node.val;
                return true;
            }

            return inorder(node.right);
        }

        inorder(root);
        return result;
    }
}