func numIdenticalPairs(nums []int) int {
	frequency := make(map[int]int)
	count := 0

	for _, num := range nums {
		count += frequency[num]
		frequency[num]++
	}

	return count
}
