func lengthOfLIS(nums []int) int {
	n := len(nums)
	dp := make([]int, n)
    for i := 0; i < n; i++ {
		dp[i] = 1
	}
    answer := 1
    for i := 1; i < n; i++ {
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				if dp[j]+1 > dp[i] {
					dp[i] = dp[j] + 1
				}
			}
		}
        if dp[i] > answer {
			answer = dp[i]
		}
	}
    return answer
}
