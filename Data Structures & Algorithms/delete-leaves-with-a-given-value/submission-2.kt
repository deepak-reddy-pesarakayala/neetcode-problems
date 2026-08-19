/**
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun removeLeafNodes(root: TreeNode?, target: Int): TreeNode? {
        if (root == null) return null
        root.left = removeLeafNodes(root.left, target)
        root.right = removeLeafNodes(root.right, target)
        if (root.left == null && root.right == null && root.`val` == target) {
            return null
        }
        return root
    }
}