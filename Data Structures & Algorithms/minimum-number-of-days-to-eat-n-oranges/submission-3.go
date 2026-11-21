func minDays(n int) int {
    memo := make(map[int]int)

    var dp func(int) int

    dp = func(x int) int {
        if x <= 1 {
            return x
        }

        if val, ok := memo[x]; ok {
            return val
        }

        byTwo := x%2 + dp(x/2)
        byThree := x%3 + dp(x/3)

        memo[x] = 1 + min(byTwo, byThree)

        return memo[x]
    }

    return dp(n)
}
