class Solution {
    fun restoreIpAddresses(s: String): List<String> {
        val result = mutableListOf<String>()
        val path = mutableListOf<String>()
        fun backtrack(index: Int) {
            if (path.size == 4) {
                if (index == s.length) result.add(path.joinToString("."))
                return
            }
            for (len in 1..3) {
                if (index + len > s.length) break
                val part = s.substring(index, index + len)
                if (part.length > 1 && part[0] == '0') continue
                if (part.toInt() > 255) continue
                path.add(part)
                backtrack(index + len)
                path.removeAt(path.size - 1)
            }
        }
        backtrack(0)
        return result
    }
}