func connect(root *Node) *Node {
	if root == nil {
		return nil
	}

	leftmost := root

	for leftmost.Left != nil {
		current := leftmost

		for current != nil {
			current.Left.Next = current.Right

			if current.Next != nil {
				current.Right.Next = current.Next.Left
			}

			current = current.Next
		}

		leftmost = leftmost.Left
	}

	return root
}
