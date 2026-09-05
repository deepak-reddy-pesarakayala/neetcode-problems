func rob(nums []int) int {
	prev2 := 0
	prev1 := 0
    for _, money := range nums {
		current := prev1
		if prev2+money > current {
			current = prev2 + money
		}
        prev2 = prev1
		prev1 = current
	}
    return prev1
}
