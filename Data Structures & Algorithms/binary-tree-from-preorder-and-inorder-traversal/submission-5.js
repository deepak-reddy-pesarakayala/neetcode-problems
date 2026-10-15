class Solution {
    buildTree(preorder, inorder) {
        let index = 0;
        let map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        function build(left, right) {
            if (left > right) {
                return null;
            }

            let val = preorder[index++];
            let root = new TreeNode(val);
            let mid = map.get(val);

            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);

            return root;
        }

        return build(0, inorder.length - 1);
    }
}