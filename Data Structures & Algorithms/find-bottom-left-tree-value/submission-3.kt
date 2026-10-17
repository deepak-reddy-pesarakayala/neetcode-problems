class Solution {
    fun findBottomLeftValue(root: TreeNode?): Int {
        val queue: Queue<TreeNode> = LinkedList()
        queue.add(root!!)
        var result = root.`val`

        while (queue.isNotEmpty()) {
            val size = queue.size

            for (i in 0 until size) {
                val node = queue.poll()

                if (i == 0) {
                    result = node.`val`
                }

                val left = node.left
                val right = node.right

                if (left != null) {
                    queue.add(left)
                }

                if (right != null) {
                    queue.add(right)
                }
            }
        }

        return result
    }
}