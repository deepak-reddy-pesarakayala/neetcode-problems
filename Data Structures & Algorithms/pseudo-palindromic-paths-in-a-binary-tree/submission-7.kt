class Solution {
    fun pseudoPalindromicPaths(root: TreeNode?): Int {
        if (root == null) return 0

        val stack = ArrayDeque<Pair<TreeNode, Int>>()
        stack.push(Pair(root, 0))

        var count = 0

        while (stack.isNotEmpty()) {
            val (node, mask) = stack.pop()
            val newMask = mask xor (1 shl node.`val`)

            if (node.left == null && node.right == null) {
                if ((newMask and (newMask - 1)) == 0) {
                    count++
                }
            } else {
                if (node.left != null) {
                    stack.push(Pair(node.left!!, newMask))
                }
                if (node.right != null) {
                    stack.push(Pair(node.right!!, newMask))
                }
            }
        }

        return count
    }
}