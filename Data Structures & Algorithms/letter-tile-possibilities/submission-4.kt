class Solution {
    fun numTilePossibilities(tiles: String): Int {
        val freq = IntArray(26)
        for (c in tiles) {
            freq[c - 'A']++
        }
        return backtrack(freq)
    }

    private fun backtrack(freq: IntArray): Int {
        var count = 0
        for (i in 0 until 26) {
            if (freq[i] > 0) {
                count++
                freq[i]--
                count += backtrack(freq)
                freq[i]++
            }
        }
        return count
    }
}