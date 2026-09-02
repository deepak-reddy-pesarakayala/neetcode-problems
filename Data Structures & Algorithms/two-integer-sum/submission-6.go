func twoSum(nums []int, target int) []int {
	seen := make(map[int]int)
    for i, num := range nums {
		diff := target - num
        if j, exists := seen[diff]; exists {
			return []int{j, i}
		}
        seen[num] = i
	}
    return []int{}
}

