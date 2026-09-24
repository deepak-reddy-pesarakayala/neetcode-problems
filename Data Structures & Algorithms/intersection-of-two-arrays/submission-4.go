func intersection(nums1 []int, nums2 []int) []int {
	set := make(map[int]bool)

	for _, num := range nums1 {
		set[num] = true
	}

	result := []int{}
	added := make(map[int]bool)

	for _, num := range nums2 {
		if set[num] && !added[num] {
			result = append(result, num)
			added[num] = true
		}
	}

	return result
}
