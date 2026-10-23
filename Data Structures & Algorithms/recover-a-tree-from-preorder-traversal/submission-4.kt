class Solution {
    fun recoverFromPreorder(traversal: String): TreeNode? {
        val stack = java.util.ArrayDeque<TreeNode>()
        var i = 0
        var root: TreeNode? = null

        while (i < traversal.length) {
            var depth = 0

            while (i < traversal.length && traversal[i] == '-') {
                depth++
                i++
            }

            var value = 0
            while (i < traversal.length && traversal[i].isDigit()) {
                value = value * 10 + (traversal[i] - '0')
                i++
            }

            val node = TreeNode(value)

            while (stack.size > depth) {
                stack.pop()
            }

            if (stack.isNotEmpty()) {
                val parent = stack.peek()

                if (parent.left == null) {
                    parent.left = node
                } else {
                    parent.right = node
                }
            } else {
                root = node
            }

            stack.push(node)
        }

        return root
    }
}