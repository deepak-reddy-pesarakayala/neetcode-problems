func pairSum(head *ListNode) int {
	slow, fast := head, head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	second := reverseList(slow)
	first := head

	maxSum := 0

	for second != nil {
		sum := first.Val + second.Val
		if sum > maxSum {
			maxSum = sum
		}

		first = first.Next
		second = second.Next
	}

	return maxSum
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode

	for head != nil {
		next := head.Next
		head.Next = prev
		prev = head
		head = next
	}

	return prev
}
