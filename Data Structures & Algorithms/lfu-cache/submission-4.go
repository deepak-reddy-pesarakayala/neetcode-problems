type LFUNode struct {
	key   int
	value int
	freq  int
	prev  *LFUNode
	next  *LFUNode
}

type DoublyList struct {
	head *LFUNode
	tail *LFUNode
	size int
}

func NewDoublyList() *DoublyList {
	head := &LFUNode{}
	tail := &LFUNode{}
	head.next = tail
	tail.prev = head
	return &DoublyList{head: head, tail: tail}
}

func (list *DoublyList) AddFront(node *LFUNode) {
	node.next = list.head.next
	node.prev = list.head
	list.head.next.prev = node
	list.head.next = node
	list.size++
}

func (list *DoublyList) Remove(node *LFUNode) {
	node.prev.next = node.next
	node.next.prev = node.prev
	list.size--
}

func (list *DoublyList) RemoveLast() *LFUNode {
	if list.size == 0 {
		return nil
	}
	node := list.tail.prev
	list.Remove(node)
	return node
}

type LFUCache struct {
	capacity int
	minFreq  int
	nodes    map[int]*LFUNode
	freqList map[int]*DoublyList
}

func Constructor(capacity int) LFUCache {
	return LFUCache{
		capacity: capacity,
		nodes:    make(map[int]*LFUNode),
		freqList: make(map[int]*DoublyList),
	}
}

func (this *LFUCache) Get(key int) int {
	node, exists := this.nodes[key]
	if !exists {
		return -1
	}

	this.updateFrequency(node)
	return node.value
}

func (this *LFUCache) Put(key int, value int) {
	if this.capacity == 0 {
		return
	}

	if node, exists := this.nodes[key]; exists {
		node.value = value
		this.updateFrequency(node)
		return
	}

	if len(this.nodes) >= this.capacity {
		list := this.freqList[this.minFreq]
		removed := list.RemoveLast()
		delete(this.nodes, removed.key)
	}

	node := &LFUNode{
		key:   key,
		value: value,
		freq:  1,
	}

	this.nodes[key] = node

	if this.freqList[1] == nil {
		this.freqList[1] = NewDoublyList()
	}

	this.freqList[1].AddFront(node)
	this.minFreq = 1
}

func (this *LFUCache) updateFrequency(node *LFUNode) {
	freq := node.freq
	list := this.freqList[freq]
	list.Remove(node)

	if freq == this.minFreq && list.size == 0 {
		this.minFreq++
	}

	node.freq++

	if this.freqList[node.freq] == nil {
		this.freqList[node.freq] = NewDoublyList()
	}

	this.freqList[node.freq].AddFront(node)
}