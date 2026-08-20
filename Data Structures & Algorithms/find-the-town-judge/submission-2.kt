class Solution {
    fun findJudge(n: Int, trust: Array<IntArray>): Int {
        val score = IntArray(n + 1)
        for (pair in trust) {
            score[pair[0]]--
            score[pair[1]]++
        }
        for (i in 1..n) {
            if (score[i] == n - 1) return i
        }
        return -1
    }
}