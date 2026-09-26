func sortColors(nums []int) {
	left := 0
	current := 0
	right := len(nums) - 1
	for current <= right {
		if nums[current] == 0 {
			nums[left], nums[current] = nums[current], nums[left]
			left++
			current++
		} else if nums[current] == 1 {
			current++
		} else {
			nums[current], nums[right] = nums[right], nums[current]
			right--
		}
	}
}
