class Solution {
    private var postIndex = 0
    private lateinit var postorder: IntArray
    private val map = HashMap<Int, Int>()
    fun buildTree(inorder: IntArray, postorder: IntArray): TreeNode? {
        this.postorder = postorder
        for (i in inorder.indices) {
            map[inorder[i]] = i
        }
        postIndex = postorder.size - 1
        return build(inorder, 0, inorder.size - 1)
    }
    private fun build(inorder: IntArray, left: Int, right: Int): TreeNode? {
        if (left > right) return null
        val value = postorder[postIndex--]
        val root = TreeNode(value)
        val mid = map[value]!!
        root.right = build(inorder, mid + 1, right)
        root.left = build(inorder, left, mid - 1)
        return root
    }
}