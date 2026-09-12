type RandomizedSet struct {
	nums  []int
	index map[int]int
}

func Constructor() RandomizedSet {
	return RandomizedSet{
		nums:  []int{},
		index: make(map[int]int),
	}
}

func (this *RandomizedSet) Insert(val int) bool {
	if _, exists := this.index[val]; exists {
		return false
	}

	this.nums = append(this.nums, val)
	this.index[val] = len(this.nums) - 1

	return true
}

func (this *RandomizedSet) Remove(val int) bool {
	i, exists := this.index[val]
	if !exists {
		return false
	}

	last := this.nums[len(this.nums)-1]

	this.nums[i] = last
	this.index[last] = i

	this.nums = this.nums[:len(this.nums)-1]
	delete(this.index, val)

	return true
}

func (this *RandomizedSet) GetRandom() int {
	return this.nums[rand.Intn(len(this.nums))]
}