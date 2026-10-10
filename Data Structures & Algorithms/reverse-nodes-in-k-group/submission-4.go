func reverseKGroup(head *ListNode, k int) *ListNode {
	dummy := &ListNode{Next: head}
	groupPrev := dummy

	for {
		kth := groupPrev
		for i := 0; i < k && kth != nil; i++ {
			kth = kth.Next
		}

		if kth == nil {
			break
		}

		groupNext := kth.Next
		prev := groupNext
		current := groupPrev.Next

		for current != groupNext {
			next := current.Next
			current.Next = prev
			prev = current
			current = next
		}

		temp := groupPrev.Next
		groupPrev.Next = kth
		groupPrev = temp
	}

	return dummy.Next
}
