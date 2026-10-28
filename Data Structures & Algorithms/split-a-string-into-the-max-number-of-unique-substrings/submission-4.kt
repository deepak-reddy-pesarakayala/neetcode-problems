class Solution {
    fun maxUniqueSplit(s: String): Int {
        val seen = HashSet<String>()
        var result = 0
        fun backtrack(start: Int, count: Int) {
            if (start == s.length) {
                result = maxOf(result, count)
                return
            }
            for (end in start + 1..s.length) {
                val part = s.substring(start, end)
                if (seen.add(part)) {
                    backtrack(end, count + 1)
                    seen.remove(part)
                }
            }
        }
        backtrack(0, 0)
        return result
    }
}