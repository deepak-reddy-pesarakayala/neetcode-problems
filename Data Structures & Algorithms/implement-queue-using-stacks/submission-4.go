type MyQueue struct {
	inStack  []int
	outStack []int
}

func Constructor() MyQueue {
	return MyQueue{}
}

func (this *MyQueue) Push(x int) {
	this.inStack = append(this.inStack, x)
}

func (this *MyQueue) Pop() int {
	this.move()
	n := len(this.outStack)
	x := this.outStack[n-1]
	this.outStack = this.outStack[:n-1]
	return x
}

func (this *MyQueue) Peek() int {
	this.move()
	return this.outStack[len(this.outStack)-1]
}

func (this *MyQueue) Empty() bool {
	return len(this.inStack) == 0 && len(this.outStack) == 0
}

func (this *MyQueue) move() {
	if len(this.outStack) == 0 {
		for len(this.inStack) > 0 {
			n := len(this.inStack)
			this.outStack = append(this.outStack, this.inStack[n-1])
			this.inStack = this.inStack[:n-1]
		}
	}
}
