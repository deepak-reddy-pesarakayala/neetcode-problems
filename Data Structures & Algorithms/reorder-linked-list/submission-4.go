func reorderList(head *ListNode) {
	if head == nil || head.Next == nil {
		return
	}
	slow := head
	fast := head
    for fast.Next != nil && fast.Next.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	second := slow.Next
	slow.Next = nil
	var prev *ListNode
    for second != nil {
		next := second.Next
		second.Next = prev
		prev = second
		second = next
	}
	first := head
	second = prev  
	for second != nil {
		firstNext := first.Next
		secondNext := second.Next
		first.Next = second
		second.Next = firstNext
        first = firstNext
		second = secondNext
	}
}