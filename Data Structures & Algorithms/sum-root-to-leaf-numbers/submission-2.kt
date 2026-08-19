class Solution {
    fun sumNumbers(root: TreeNode?): Int {
        return dfs(root, 0)
    }
    private fun dfs(node: TreeNode?, current: Int): Int {
        if (node == null) return 0
        val number = current * 10 + node.`val`
        if (node.left == null && node.right == null) {
            return number
        }
        return dfs(node.left, number) + dfs(node.right, number)
    }
}