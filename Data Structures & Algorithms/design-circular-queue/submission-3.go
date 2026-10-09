type MyCircularQueue struct {
	data       []int
	front      int
	size       int
	capacity   int
}

func Constructor(k int) MyCircularQueue {
	return MyCircularQueue{
		data:     make([]int, k),
		front:    0,
		size:     0,
		capacity: k,
	}
}

func (this *MyCircularQueue) EnQueue(value int) bool {
	if this.IsFull() {
		return false
	}

	rear := (this.front + this.size) % this.capacity
	this.data[rear] = value
	this.size++

	return true
}

func (this *MyCircularQueue) DeQueue() bool {
	if this.IsEmpty() {
		return false
	}

	this.front = (this.front + 1) % this.capacity
	this.size--

	return true
}

func (this *MyCircularQueue) Front() int {
	if this.IsEmpty() {
		return -1
	}

	return this.data[this.front]
}

func (this *MyCircularQueue) Rear() int {
	if this.IsEmpty() {
		return -1
	}

	rear := (this.front + this.size - 1) % this.capacity
	return this.data[rear]
}

func (this *MyCircularQueue) IsEmpty() bool {
	return this.size == 0
}

func (this *MyCircularQueue) IsFull() bool {
	return this.size == this.capacity
}
