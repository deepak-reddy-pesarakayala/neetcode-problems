type Solution struct {
	prefix []int
	total  int
}

func Constructor(w []int) Solution {
	prefix := make([]int, len(w))
	sum := 0

	for i, weight := range w {
		sum += weight
		prefix[i] = sum
	}

	return Solution{
		prefix: prefix,
		total:  sum,
	}
}

func (this *Solution) PickIndex() int {
	target := rand.Intn(this.total) + 1

	return sort.Search(len(this.prefix), func(i int) bool {
		return this.prefix[i] >= target
	})
}