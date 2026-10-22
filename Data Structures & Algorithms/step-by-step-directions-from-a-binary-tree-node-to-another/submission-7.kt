class Solution {
    fun getDirections(root: TreeNode?, startValue: Int, destValue: Int): String {
        fun findPath(target: Int): String {
            val stack = java.util.ArrayDeque<Pair<TreeNode, String>>()
            stack.push(Pair(root!!, ""))

            while (stack.isNotEmpty()) {
                val (node, path) = stack.pop()

                if (node.`val` == target) return path

                if (node.right != null) {
                    stack.push(Pair(node.right!!, path + "R"))
                }

                if (node.left != null) {
                    stack.push(Pair(node.left!!, path + "L"))
                }
            }

            return ""
        }

        val startPath = findPath(startValue)
        val destPath = findPath(destValue)

        var i = 0
        while (i < startPath.length &&
            i < destPath.length &&
            startPath[i] == destPath[i]
        ) {
            i++
        }

        return "U".repeat(startPath.length - i) + destPath.substring(i)
    }
}