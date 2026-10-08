type ListNode struct {
	Val  int
	Next *ListNode
}

type MyLinkedList struct {
	head *ListNode
	size int
}

func Constructor() MyLinkedList {
	return MyLinkedList{}
}

func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.size {
		return -1
	}

	current := this.head

	for i := 0; i < index; i++ {
		current = current.Next
	}

	return current.Val
}

func (this *MyLinkedList) AddAtHead(val int) {
	node := &ListNode{
		Val:  val,
		Next: this.head,
	}

	this.head = node
	this.size++
}

func (this *MyLinkedList) AddAtTail(val int) {
	node := &ListNode{Val: val}

	if this.head == nil {
		this.head = node
		this.size++
		return
	}

	current := this.head

	for current.Next != nil {
		current = current.Next
	}

	current.Next = node
	this.size++
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index < 0 || index > this.size {
		return
	}

	if index == 0 {
		this.AddAtHead(val)
		return
	}

	node := &ListNode{Val: val}
	current := this.head

	for i := 0; i < index-1; i++ {
		current = current.Next
	}

	node.Next = current.Next
	current.Next = node
	this.size++
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.size {
		return
	}

	if index == 0 {
		this.head = this.head.Next
		this.size--
		return
	}

	current := this.head

	for i := 0; i < index-1; i++ {
		current = current.Next
	}

	current.Next = current.Next.Next
	this.size--
}
