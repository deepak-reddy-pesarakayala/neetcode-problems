func subarraysDivByK(nums []int, k int) int {
	count := 0
	prefixSum := 0
	frequency := make([]int, k)
	frequency[0] = 1
    for _, num := range nums {
		prefixSum += num
		remainder := prefixSum % k
        if remainder < 0 {
			remainder += k
		}
        count += frequency[remainder]
		frequency[remainder]++
	}
    return count
}
