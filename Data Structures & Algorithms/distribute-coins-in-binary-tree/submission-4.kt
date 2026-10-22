class Solution {
    fun distributeCoins(root: TreeNode?): Int {
        var moves = 0

        fun dfs(node: TreeNode?): Int {
            if (node == null) return 0

            val left = dfs(node.left)
            val right = dfs(node.right)

            moves += kotlin.math.abs(left) + kotlin.math.abs(right)

            return node.`val` + left + right - 1
        }

        dfs(root)
        return moves
    }
}