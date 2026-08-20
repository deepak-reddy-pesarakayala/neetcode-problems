class Solution {
    fun countPrefixSuffixPairs(words: Array<String>): Int {
        var count = 0
        for (i in 0 until words.size) {
            for (j in i + 1 until words.size) {
                val a = words[i]
                val b = words[j]
                if (b.startsWith(a) && b.endsWith(a)) {
                    count++
                }
            }
        }
        return count
    }
}