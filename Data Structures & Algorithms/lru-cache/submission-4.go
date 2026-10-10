type Node struct {
	key   int
	value int
	prev  *Node
	next  *Node
}

type LRUCache struct {
	capacity int
	cache    map[int]*Node
	head     *Node
	tail     *Node
}

func Constructor(capacity int) LRUCache {
	head := &Node{}
	tail := &Node{}
	head.next = tail
	tail.prev = head

	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*Node),
		head:     head,
		tail:     tail,
	}
}

func (this *LRUCache) remove(node *Node) {
	node.prev.next = node.next
	node.next.prev = node.prev
}

func (this *LRUCache) addToFront(node *Node) {
	node.next = this.head.next
	node.prev = this.head
	this.head.next.prev = node
	this.head.next = node
}

func (this *LRUCache) Get(key int) int {
	node, exists := this.cache[key]
	if !exists {
		return -1
	}

	this.remove(node)
	this.addToFront(node)
	return node.value
}

func (this *LRUCache) Put(key int, value int) {
	if node, exists := this.cache[key]; exists {
		node.value = value
		this.remove(node)
		this.addToFront(node)
		return
	}

	if len(this.cache) == this.capacity {
		lru := this.tail.prev
		this.remove(lru)
		delete(this.cache, lru.key)
	}

	node := &Node{key: key, value: value}
	this.cache[key] = node
	this.addToFront(node)
}