func maxPathSum(root *TreeNode) int {
	maxSum := root.Val
    var dfs func(*TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
        left := dfs(node.Left)
		right := dfs(node.Right)
        if left < 0 {
			left = 0
		}
		if right < 0 {
			right = 0
		}
        currentPath := node.Val + left + right
		if currentPath > maxSum {
			maxSum = currentPath
		}
        if left > right {
			return node.Val + left
		}
		return node.Val + right
	}

	dfs(root)
	return maxSum
}
