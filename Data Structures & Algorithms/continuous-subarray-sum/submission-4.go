func checkSubarraySum(nums []int, k int) bool {
	first := make(map[int]int)
	first[0] = -1
    remainder := 0
    for i, num := range nums {
		remainder = (remainder + num) % k

		if index, exists := first[remainder]; exists {
			if i-index >= 2 {
				return true
			}
		} else {
			first[remainder] = i
		}
	}

	return false
}
