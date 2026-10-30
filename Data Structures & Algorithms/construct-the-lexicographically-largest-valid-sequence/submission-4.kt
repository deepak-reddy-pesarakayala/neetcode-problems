class Solution {
    fun constructDistancedSequence(n: Int): IntArray {
        val result = IntArray(2 * n - 1)
        val used = BooleanArray(n + 1)

        fun backtrack(index: Int): Boolean {
            if (index == result.size) return true

            if (result[index] != 0) {
                return backtrack(index + 1)
            }

            for (num in n downTo 1) {
                if (used[num]) continue

                if (num == 1) {
                    result[index] = 1
                    used[1] = true

                    if (backtrack(index + 1)) return true

                    result[index] = 0
                    used[1] = false
                } else {
                    val next = index + num

                    if (next < result.size && result[next] == 0) {
                        result[index] = num
                        result[next] = num
                        used[num] = true

                        if (backtrack(index + 1)) return true

                        result[index] = 0
                        result[next] = 0
                        used[num] = false
                    }
                }
            }

            return false
        }

        backtrack(0)
        return result
    }
}