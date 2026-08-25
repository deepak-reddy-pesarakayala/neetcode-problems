class Solution {
    fun partitionLabels(s: String): List<Int> {
        val last = IntArray(26)
        for (i in s.indices) {
            last[s[i] - 'a'] = i
        }
        val result = mutableListOf<Int>()
        var end = 0
        var start = 0
        for (i in s.indices) {
            end = maxOf(end, last[s[i] - 'a'])
            if (i == end) {
                result.add(i - start + 1)
                start = i + 1
            }
        }
        return result
    }
}