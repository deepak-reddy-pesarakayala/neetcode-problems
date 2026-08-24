class Solution {
    fun canReach(s: String, minJump: Int, maxJump: Int): Boolean {
        val n = s.length
        val dp = BooleanArray(n)
        dp[0] = true
        var reachable = 0
        for (i in 1 until n) {
            val left = i - maxJump
            val right = i - minJump
            if (right >= 0) {
                if (dp[right]) reachable++
            }
            if (left - 1 >= 0 && dp[left - 1]) reachable--
            dp[i] = s[i] == '0' && reachable > 0
        }
        return dp[n - 1]
    }
}
