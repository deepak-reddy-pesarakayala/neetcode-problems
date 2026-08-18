class Solution {
    fun zigzagLevelOrder(root: TreeNode?): List<List<Int>> {
        if (root == null) return emptyList()
        val result = mutableListOf<List<Int>>()
        val queue = ArrayDeque<TreeNode>()
        queue.addLast(root)
        var leftToRight = true
        while (queue.isNotEmpty()) {
            val size = queue.size
            val level = ArrayList<Int>(size)
            repeat(size) {
                val node = queue.removeFirst()
                level.add(node.`val`)
                node.left?.let { queue.addLast(it) }
                node.right?.let { queue.addLast(it) }
            }
            if (!leftToRight) {
                level.reverse()
            }
            result.add(level)
            leftToRight = !leftToRight
        }
        return result
    }
}