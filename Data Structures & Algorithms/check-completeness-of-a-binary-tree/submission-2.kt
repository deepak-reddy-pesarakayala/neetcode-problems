class Solution {
    fun isCompleteTree(root: TreeNode?): Boolean {
        if (root == null) return true
        val queue = java.util.LinkedList<TreeNode?>()
        queue.add(root)
        var foundNull = false
        while (queue.isNotEmpty()) {
            val node = queue.poll()
            if (node == null) {
                foundNull = true
            } else {
                if (foundNull) return false
                queue.add(node.left)
                queue.add(node.right)
            }
        }
        return true
    }
}