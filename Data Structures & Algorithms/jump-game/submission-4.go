func canJump(nums []int) bool {
	maxReach := 0
    for i := 0; i < len(nums); i++ {
		if i > maxReach {
			return false
		}
        reach := i + nums[i]
		if reach > maxReach {
			maxReach = reach
		}
        if maxReach >= len(nums)-1 {
			return true
		}
	}
    return true
}