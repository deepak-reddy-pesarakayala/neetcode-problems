func maxProduct(nums []int) int {
	maxProduct := nums[0]
	minProduct := nums[0]
	answer := nums[0]
    for i := 1; i < len(nums); i++ {
		num := nums[i]
        if num < 0 {
			maxProduct, minProduct = minProduct, maxProduct
		}
        maxProduct = max(num, maxProduct*num)
		minProduct = min(num, minProduct*num)
        answer = max(answer, maxProduct)
	}
    return answer
}
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}