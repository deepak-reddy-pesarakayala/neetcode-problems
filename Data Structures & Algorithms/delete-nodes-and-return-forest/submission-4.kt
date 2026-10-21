class Solution {
    fun delNodes(root: TreeNode?, to_delete: IntArray): List<TreeNode> {
        val deleteSet = to_delete.toHashSet()
        val forest = mutableListOf<TreeNode>()

        fun dfs(node: TreeNode?, isRoot: Boolean): TreeNode? {
            if (node == null) return null

            val deleted = node.`val` in deleteSet

            if (isRoot && !deleted) {
                forest.add(node)
            }

            node.left = dfs(node.left, deleted)
            node.right = dfs(node.right, deleted)

            return if (deleted) null else node
        }

        dfs(root, true)
        return forest
    }
}