func rob(root *TreeNode) int {
	var dfs func(*TreeNode) (int, int)

	dfs = func(node *TreeNode) (int, int) {
		if node == nil {
			return 0, 0
		}

		leftRob, leftSkip := dfs(node.Left)
		rightRob, rightSkip := dfs(node.Right)

		robCurrent := node.Val + leftSkip + rightSkip
		skipCurrent := max(leftRob, leftSkip) + max(rightRob, rightSkip)

		return robCurrent, skipCurrent
	}

	robAmount, skipAmount := dfs(root)
	return max(robAmount, skipAmount)
}
