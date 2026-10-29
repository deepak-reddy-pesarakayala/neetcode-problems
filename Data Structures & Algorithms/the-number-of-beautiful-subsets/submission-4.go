func beautifulSubsets(nums []int, k int) int {
	n := len(nums)
	count := 0
	for mask := 1; mask < (1 << n); mask++ {
		valid := true
		for i := 0; i < n && valid; i++ {
			if mask&(1<<i) == 0 {
				continue
			}
			for j := i + 1; j < n; j++ {
				if mask&(1<<j) != 0 {
					diff := nums[i] - nums[j]
					if diff < 0 {
						diff = -diff
					}
					if diff == k {
						valid = false
						break
					}
				}
			}
		}
		if valid {
			count++
		}
	}
	return count
}