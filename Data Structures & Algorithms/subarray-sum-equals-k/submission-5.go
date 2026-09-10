func subarraySum(nums []int, k int) int {
	count := 0
	prefixSum := 0
	frequency := make(map[int]int)
    frequency[0] = 1
    for _, num := range nums {
		prefixSum += num
        if frequency[prefixSum-k] > 0 {
			count += frequency[prefixSum-k]
		}
        frequency[prefixSum]++
	}
    return count
}