class Solution {
    private var first: TreeNode? = null
    private var second: TreeNode? = null
    private var prev: TreeNode? = null

    fun recoverTree(root: TreeNode?): Unit {
        inorder(root)

        if (first != null && second != null) {
            val temp = first!!.`val`
            first!!.`val` = second!!.`val`
            second!!.`val` = temp
        }
    }

    private fun inorder(node: TreeNode?) {
        if (node == null) return

        inorder(node.left)

        if (prev != null && prev!!.`val` > node.`val`) {
            if (first == null) {
                first = prev
            }
            second = node
        }

        prev = node

        inorder(node.right)
    }
}