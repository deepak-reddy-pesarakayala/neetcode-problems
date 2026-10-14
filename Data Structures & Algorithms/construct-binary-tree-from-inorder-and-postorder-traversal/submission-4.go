func buildTree(inorder []int, postorder []int) *TreeNode {
	indexMap := make(map[int]int)
	for i, val := range inorder {
		indexMap[val] = i
	}

	postIndex := len(postorder) - 1

	var build func(int, int) *TreeNode
	build = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}

		val := postorder[postIndex]
		postIndex--

		root := &TreeNode{Val: val}
		mid := indexMap[val]

		root.Right = build(mid+1, right)
		root.Left = build(left, mid-1)

		return root
	}

	return build(0, len(inorder)-1)
}
