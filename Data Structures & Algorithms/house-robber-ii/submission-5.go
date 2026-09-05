func rob(nums []int) int {
	n := len(nums)
    if n == 1 {
		return nums[0]
	}
    robRange := func(start, end int) int {
		prev2 := 0
		prev1 := 0
        for i := start; i <= end; i++ {
			current := prev1
            if prev2+nums[i] > current {
				current = prev2 + nums[i]
			}
            prev2 = prev1
			prev1 = current
		}
        return prev1
	}
    case1 := robRange(0, n-2)
	case2 := robRange(1, n-1)
    if case1 > case2 {
		return case1
	}
    return case2
}
