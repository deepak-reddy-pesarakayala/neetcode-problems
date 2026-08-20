class Solution {
    fun makesquare(matchsticks: IntArray): Boolean {
        val sum = matchsticks.sum()
        if (sum % 4 != 0) return false
        val side = sum / 4
        matchsticks.sortDescending()
        if (matchsticks[0] > side) return false
        val sides = IntArray(4)
        fun backtrack(index: Int): Boolean {
            if (index == matchsticks.size) return sides.all { it == side }
            val stick = matchsticks[index]
            for (i in 0..3) {
                if (sides[i] + stick > side) continue
                if (i > 0 && sides[i] == sides[i - 1]) continue
                sides[i] += stick
                if (backtrack(index + 1)) return true
                sides[i] -= stick
                if (sides[i] == 0) break
            }
            return false
        }
        return backtrack(0)
    }
}