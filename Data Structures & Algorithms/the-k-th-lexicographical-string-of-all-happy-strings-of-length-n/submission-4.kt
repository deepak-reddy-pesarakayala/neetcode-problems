class Solution {
    fun getHappyString(n: Int, k: Int): String {
        val result = mutableListOf<String>()
        val current = StringBuilder()
        fun backtrack() {
            if (current.length == n) {
                result.add(current.toString())
                return
            }
            for (c in 'a'..'c') {
                if (current.isNotEmpty() && current.last() == c) continue
                current.append(c)
                backtrack()
                current.deleteCharAt(current.length - 1)
            }
        }
        backtrack()
        return if (k <= result.size) result[k - 1] else ""
    }
}