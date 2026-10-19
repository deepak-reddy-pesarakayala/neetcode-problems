class Solution {
    fun isEvenOddTree(root: TreeNode?): Boolean {
        if (root == null) return true

        val queue: Queue<TreeNode> = LinkedList()
        queue.offer(root)

        var level = 0

        while (queue.isNotEmpty()) {
            val size = queue.size
            var prev = if (level % 2 == 0) Int.MIN_VALUE else Int.MAX_VALUE

            repeat(size) {
                val node = queue.poll()
                val value = node.`val`

                if (level % 2 == 0) {
                    if (value % 2 == 0 || value <= prev) return false
                } else {
                    if (value % 2 != 0 || value >= prev) return false
                }

                prev = value

                node.left?.let { queue.offer(it) }
                node.right?.let { queue.offer(it) }
            }

            level++
        }

        return true
    }
}