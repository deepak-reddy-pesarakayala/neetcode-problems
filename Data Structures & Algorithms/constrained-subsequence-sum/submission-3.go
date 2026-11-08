func constrainedSubsetSum(nums []int, k int) int {
    n := len(nums)
    dp := make([]int, n)
    deque := make([]int, 0)
    ans := nums[0]

    for i := 0; i < n; i++ {
        for len(deque) > 0 && deque[0] < i-k {
            deque = deque[1:]
        }

        dp[i] = nums[i]

        if len(deque) > 0 && dp[deque[0]] > 0 {
            dp[i] += dp[deque[0]]
        }

        if dp[i] > ans {
            ans = dp[i]
        }

        for len(deque) > 0 && dp[deque[len(deque)-1]] <= dp[i] {
            deque = deque[:len(deque)-1]
        }

        deque = append(deque, i)
    }

    return ans
}