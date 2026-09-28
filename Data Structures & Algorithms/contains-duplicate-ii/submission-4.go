func containsNearbyDuplicate(nums []int, k int) bool {
	lastIndex := make(map[int]int)

	for i, num := range nums {
		if index, exists := lastIndex[num]; exists {
			if i-index <= k {
				return true
			}
		}
		lastIndex[num] = i
	}

	return false
}
