func canPartitionKSubsets(nums []int, k int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	if sum%k != 0 {
		return false
	}
	target := sum / k
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	if nums[0] > target {
		return false
	}
	buckets := make([]int, k)
	return backtrack(nums, buckets, 0, target)
}

func backtrack(nums []int, buckets []int, index, target int) bool {
	if index == len(nums) {
		for _, sum := range buckets {
			if sum != target {
				return false
			}
		}
		return true
	}
	for i := 0; i < len(buckets); i++ {
		if buckets[i]+nums[index] <= target {
			buckets[i] += nums[index]
			if backtrack(nums, buckets, index+1, target) {
				return true
			}
			buckets[i] -= nums[index]
		}
		if buckets[i] == 0 {
			break
		}
	}
	return false
}