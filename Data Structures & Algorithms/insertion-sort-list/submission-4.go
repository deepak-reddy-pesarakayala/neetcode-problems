func insertionSortList(head *ListNode) *ListNode {
	dummy := &ListNode{}
	current := head

	for current != nil {
		next := current.Next
		prev := dummy

		for prev.Next != nil && prev.Next.Val < current.Val {
			prev = prev.Next
		}

		current.Next = prev.Next
		prev.Next = current
		current = next
	}

	return dummy.Next
}
