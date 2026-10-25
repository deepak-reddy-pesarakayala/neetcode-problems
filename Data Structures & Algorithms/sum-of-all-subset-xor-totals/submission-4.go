func subsetXORSum(nums []int) int {
	or := 0
	for _, num := range nums {
		or |= num
	}
	return or * (1 << (len(nums) - 1))
}