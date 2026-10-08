func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}

	current := head

	for current != nil {
		copy := &Node{Val: current.Val}
		copy.Next = current.Next
		current.Next = copy
		current = copy.Next
	}

	current = head

	for current != nil {
		if current.Random != nil {
			current.Next.Random = current.Random.Next
		}
		current = current.Next.Next
	}

	current = head
	copyHead := head.Next

	for current != nil {
		copy := current.Next
		current.Next = copy.Next

		if copy.Next != nil {
			copy.Next = copy.Next.Next
		}

		current = current.Next
	}

	return copyHead
}
