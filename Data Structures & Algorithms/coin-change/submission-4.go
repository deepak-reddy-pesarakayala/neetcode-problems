func coinChange(coins []int, amount int) int {
	if amount == 0 {
		return 0
	}
    dp := make([]int, amount+1)
    for i := 1; i <= amount; i++ {
		dp[i] = amount + 1
	}
    for i := 1; i <= amount; i++ {
		for _, coin := range coins {
			if coin <= i && dp[i-coin] != amount+1 {
				current := dp[i-coin] + 1
                if current < dp[i] {
					dp[i] = current
				}
			}
		}
	}
    if dp[amount] == amount+1 {
		return -1
	}
    return dp[amount]
}
