class Solution {
    fun combine(n: Int, k: Int): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        val current = mutableListOf<Int>()
        fun backtrack(start: Int) {
            if (current.size == k) {
                result.add(current.toList())
                return
            }
            for (i in start..n) {
                current.add(i)
                backtrack(i + 1)
                current.removeAt(current.size - 1)
            }
        }
        backtrack(1)
        return result
    }
}
