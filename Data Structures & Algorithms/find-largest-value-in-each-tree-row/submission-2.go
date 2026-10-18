func largestValues(root *TreeNode) []int {
	result := []int{}
	if root == nil {
		return result
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		size := len(queue)
		maxVal := queue[0].Val

		for i := 0; i < size; i++ {
			node := queue[0]
			queue = queue[1:]

			if node.Val > maxVal {
				maxVal = node.Val
			}

			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		result = append(result, maxVal)
	}

	return result
}
