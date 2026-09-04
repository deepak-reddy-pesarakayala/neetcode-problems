func buildTree(preorder []int, inorder []int) *TreeNode {
	indexMap := make(map[int]int)
	for i, val := range inorder {
		indexMap[val] = i
	}
	preIndex := 0
	var build func(int, int) *TreeNode
	build = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}
		rootVal := preorder[preIndex]
		preIndex++
		root := &TreeNode{Val: rootVal}
		mid := indexMap[rootVal]
		root.Left = build(left, mid-1)
		root.Right = build(mid+1, right)
		return root
	}
	return build(0, len(inorder)-1)
}
