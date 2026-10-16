class Solution {
    fun allPossibleFBT(n: Int): List<TreeNode?> {
        val result = mutableListOf<TreeNode?>()

        if (n % 2 == 0) return result

        if (n == 1) {
            result.add(TreeNode(0))
            return result
        }

        for (left in 1 until n step 2) {
            val right = n - 1 - left

            val leftTrees = allPossibleFBT(left)
            val rightTrees = allPossibleFBT(right)

            for (l in leftTrees) {
                for (r in rightTrees) {
                    val root = TreeNode(0)
                    root.left = l
                    root.right = r
                    result.add(root)
                }
            }
        }

        return result
    }
}