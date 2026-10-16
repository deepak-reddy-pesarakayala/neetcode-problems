type LockingTree struct {
	parent   []int
	children [][]int
	locked   []int
}

func Constructor(parent []int) LockingTree {
	n := len(parent)
	children := make([][]int, n)

	for i := 1; i < n; i++ {
		children[parent[i]] = append(children[parent[i]], i)
	}

	return LockingTree{
		parent:   parent,
		children: children,
		locked:   make([]int, n),
	}
}

func (this *LockingTree) Lock(num int, user int) bool {
	if this.locked[num] != 0 {
		return false
	}

	this.locked[num] = user
	return true
}

func (this *LockingTree) Unlock(num int, user int) bool {
	if this.locked[num] != user {
		return false
	}

	this.locked[num] = 0
	return true
}

func (this *LockingTree) Upgrade(num int, user int) bool {
	if this.locked[num] != 0 {
		return false
	}

	for p := this.parent[num]; p != -1; p = this.parent[p] {
		if this.locked[p] != 0 {
			return false
		}
	}

	hasLockedDescendant := false
	stack := append([]int{}, this.children[num]...)

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		if this.locked[node] != 0 {
			hasLockedDescendant = true
		}

		stack = append(stack, this.children[node]...)
	}

	if !hasLockedDescendant {
		return false
	}

	stack = append([]int{}, this.children[num]...)

	for len(stack) > 0 {
		node := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		this.locked[node] = 0
		stack = append(stack, this.children[node]...)
	}

	this.locked[num] = user
	return true
}
