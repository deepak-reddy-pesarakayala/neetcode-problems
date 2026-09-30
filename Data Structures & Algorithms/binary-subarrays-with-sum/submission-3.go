func numSubarraysWithSum(nums []int, goal int) int {
	frequency := make(map[int]int)
	frequency[0] = 1

	sum := 0
	answer := 0

	for _, num := range nums {
		sum += num

		answer += frequency[sum-goal]

		frequency[sum]++
	}

	return answer
}
