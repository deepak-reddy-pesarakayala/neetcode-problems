func pseudoPalindromicPaths(root *TreeNode) int {
	var dfs func(*TreeNode, int) int

	dfs = func(node *TreeNode, mask int) int {
		if node == nil {
			return 0
		}

		mask ^= 1 << node.Val

		if node.Left == nil && node.Right == nil {
			if mask&(mask-1) == 0 {
				return 1
			}
			return 0
		}

		return dfs(node.Left, mask) + dfs(node.Right, mask)
	}

	return dfs(root, 0)
}
