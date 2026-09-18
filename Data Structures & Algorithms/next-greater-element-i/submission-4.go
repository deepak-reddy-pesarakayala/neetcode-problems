func nextGreaterElement(nums1 []int, nums2 []int) []int {
	stack := []int{}
	next := make(map[int]int)

	for i := len(nums2) - 1; i >= 0; i-- {
		for len(stack) > 0 && stack[len(stack)-1] <= nums2[i] {
			stack = stack[:len(stack)-1]
		}

		if len(stack) == 0 {
			next[nums2[i]] = -1
		} else {
			next[nums2[i]] = stack[len(stack)-1]
		}

		stack = append(stack, nums2[i])
	}

	result := make([]int, len(nums1))

	for i, num := range nums1 {
		result[i] = next[num]
	}

	return result
}
