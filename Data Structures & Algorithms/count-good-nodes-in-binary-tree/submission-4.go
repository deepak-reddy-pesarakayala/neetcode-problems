func goodNodes(root *TreeNode) int {
	var dfs func(*TreeNode, int) int

	dfs = func(node *TreeNode, maxVal int) int {
		if node == nil {
			return 0
		}

		count := 0
		if node.Val >= maxVal {
			count = 1
			maxVal = node.Val
		}

		count += dfs(node.Left, maxVal)
		count += dfs(node.Right, maxVal)

		return count
	}

	return dfs(root, root.Val)
}