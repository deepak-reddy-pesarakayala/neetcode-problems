class Solution {
    fun findAllConcatenatedWordsInADict(words: Array<String>): List<String> {
        val set = words.toHashSet()
        val result = mutableListOf<String>()
        for (word in words) {
            val n = word.length
            val dp = IntArray(n + 1)
            dp[0] = 1
            for (i in 1..n) {
                for (j in 0 until i) {
                    if (dp[j] == 0) continue
                    if (j == 0 && i == n) continue
                    if (set.contains(word.substring(j, i))) {
                        dp[i] = dp[j] + 1
                        break
                    }
                }
            }
            if (dp[n] >= 2) result.add(word)
        }
        return result
    }
}