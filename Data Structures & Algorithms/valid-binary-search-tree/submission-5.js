class Solution {
    isValidBST(root) {
        function check(node, min, max) {
            if (node === null) {
                return true;
            }

            if (node.val <= min || node.val >= max) {
                return false;
            }

            return check(node.left, min, node.val) &&
                   check(node.right, node.val, max);
        }

        return check(root, -Infinity, Infinity);
    }
}