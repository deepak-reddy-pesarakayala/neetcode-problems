func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return nil
	}

	if key < root.Val {
		root.Left = deleteNode(root.Left, key)
	} else if key > root.Val {
		root.Right = deleteNode(root.Right, key)
	} else {
		if root.Left == nil {
			return root.Right
		}
		if root.Right == nil {
			return root.Left
		}

		successor := root.Right
		for successor.Left != nil {
			successor = successor.Left
		}

		root.Val = successor.Val
		root.Right = deleteNode(root.Right, successor.Val)
	}

	return root
}