class Solution {
    fun smallestFromLeaf(root: TreeNode?): String {
        if (root == null) return ""

        val stack = ArrayDeque<Pair<TreeNode, String>>()
        stack.push(Pair(root, ""))

        var result: String? = null

        while (stack.isNotEmpty()) {
            val (node, path) = stack.pop()
            val current = ('a'.code + node.`val`).toChar() + path

            if (node.left == null && node.right == null) {
                if (result == null || current < result!!) {
                    result = current
                }
            } else {
                if (node.right != null) {
                    stack.push(Pair(node.right!!, current))
                }
                if (node.left != null) {
                    stack.push(Pair(node.left!!, current))
                }
            }
        }

        return result ?: ""
    }
}