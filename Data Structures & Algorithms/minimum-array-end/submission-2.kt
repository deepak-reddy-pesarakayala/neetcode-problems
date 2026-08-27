class Solution {
    fun minEnd(n: Int, x: Int): Long {
        var need = n - 1L
        var result = x.toLong()
        var bit = 1L
        while (need > 0) {
            if ((x.toLong() and bit) == 0L) {
                if ((need and 1L) != 0L) {
                    result = result or bit
                }
                need = need shr 1
            }
            bit = bit shl 1
        }
        return result
    }
}