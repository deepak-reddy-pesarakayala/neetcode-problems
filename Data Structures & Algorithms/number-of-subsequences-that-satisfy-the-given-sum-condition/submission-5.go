func numSubseq(nums []int, target int) int {
	const mod = 1000000007

	sort.Ints(nums)

	n := len(nums)
	pow2 := make([]int, n)
	pow2[0] = 1

	for i := 1; i < n; i++ {
		pow2[i] = (pow2[i-1] * 2) % mod
	}

	left, right := 0, n-1
	answer := 0

	for left <= right {
		if nums[left]+nums[right] <= target {
			answer = (answer + pow2[right-left]) % mod
			left++
		} else {
			right--
		}
	}

	return answer
}
