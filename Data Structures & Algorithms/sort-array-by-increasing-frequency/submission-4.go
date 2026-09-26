func frequencySort(nums []int) []int {
	freq := make(map[int]int)

	for _, num := range nums {
		freq[num]++
	}

	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if freq[nums[i]] > freq[nums[j]] ||
				(freq[nums[i]] == freq[nums[j]] && nums[i] < nums[j]) {
				nums[i], nums[j] = nums[j], nums[i]
			}
		}
	}

	return nums
}
