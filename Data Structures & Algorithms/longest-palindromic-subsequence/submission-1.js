class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const n = s.length;
        let dp = new Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            dp[i] = 1; 
            let prevDiagonal = 0; 
            for (let j = i + 1; j < n; j++) {
                let temp = dp[j]; 
                if (s[i] === s[j]) {
                    dp[j] = 2 + prevDiagonal;
                } else {
                    dp[j] = Math.max(dp[j], dp[j - 1]);
                }
                prevDiagonal = temp;
            }
        }
        return dp[n - 1];
    }
}