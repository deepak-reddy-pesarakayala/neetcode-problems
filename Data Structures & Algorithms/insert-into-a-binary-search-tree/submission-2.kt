class Solution {
    fun insertIntoBST(root: TreeNode?, `val`: Int): TreeNode? {
        if (root == null) {
            return TreeNode(`val`)
        }

        var current: TreeNode = root

        while (true) {
            if (`val` < current.`val`) {
                if (current.left == null) {
                    current.left = TreeNode(`val`)
                    break
                }
                current = current.left!!
            } else {
                if (current.right == null) {
                    current.right = TreeNode(`val`)
                    break
                }
                current = current.right!!
            }
        }

        return root
    }
}