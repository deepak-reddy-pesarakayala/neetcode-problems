func isCompleteTree(root *TreeNode) bool {
	if root == nil {
		return true
	}

	queue := []*TreeNode{root}
	foundNull := false

	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]

		if node == nil {
			foundNull = true
			continue
		}

		if foundNull {
			return false
		}

		queue = append(queue, node.Left, node.Right)
	}

	return true
}
