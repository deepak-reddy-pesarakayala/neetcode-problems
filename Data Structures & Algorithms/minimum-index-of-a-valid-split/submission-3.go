func minimumIndex(nums []int) int {
	candidate := nums[0]
	count := 0
    for _, num := range nums {
		if count == 0 {
			candidate = num
			count = 1
		} else if num == candidate {
			count++
		} else {
			count--
		}
	}
    totalCount := 0
	for _, num := range nums {
		if num == candidate {
			totalCount++
		}
	}
    leftCount := 0
    for i := 0; i < len(nums)-1; i++ {
		if nums[i] == candidate {
			leftCount++
		}
        leftLength := i + 1
		rightLength := len(nums) - leftLength
		rightCount := totalCount - leftCount
        if leftCount*2 > leftLength && rightCount*2 > rightLength {
			return i
		}
	}
    return -1
}
