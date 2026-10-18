class Solution {
    fun largestValues(root: TreeNode?): List<Int> {
        val result = mutableListOf<Int>()
        if (root == null) return result

        val queue = java.util.ArrayDeque<TreeNode>()
        queue.add(root)

        while (queue.isNotEmpty()) {
            val size = queue.size
            var maxValue = Int.MIN_VALUE

            repeat(size) {
                val node = queue.removeFirst()
                maxValue = maxOf(maxValue, node.`val`)

                val left = node.left
                val right = node.right

                if (left != null) queue.addLast(left)
                if (right != null) queue.addLast(right)
            }

            result.add(maxValue)
        }

        return result
    }
}