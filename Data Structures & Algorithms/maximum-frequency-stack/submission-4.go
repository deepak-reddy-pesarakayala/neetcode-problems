type FreqStack struct {
	freq    map[int]int
	groups  map[int][]int
	maxFreq int
}

func Constructor() FreqStack {
	return FreqStack{
		freq:   make(map[int]int),
		groups: make(map[int][]int),
	}
}

func (this *FreqStack) Push(val int) {
	this.freq[val]++
	f := this.freq[val]

	this.groups[f] = append(this.groups[f], val)

	if f > this.maxFreq {
		this.maxFreq = f
	}
}

func (this *FreqStack) Pop() int {
	stack := this.groups[this.maxFreq]
	val := stack[len(stack)-1]

	this.groups[this.maxFreq] = stack[:len(stack)-1]
	this.freq[val]--

	if len(this.groups[this.maxFreq]) == 0 {
		delete(this.groups, this.maxFreq)
		this.maxFreq--
	}

	return val
}
