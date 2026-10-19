func smallestFromLeaf(root *TreeNode) string {
	var result string

	var dfs func(*TreeNode, string)
	dfs = func(node *TreeNode, path string) {
		if node == nil {
			return
		}

		path = string(byte('a'+node.Val)) + path

		if node.Left == nil && node.Right == nil {
			if result == "" || path < result {
				result = path
			}
			return
		}

		dfs(node.Left, path)
		dfs(node.Right, path)
	}

	dfs(root, "")
	return result
}
