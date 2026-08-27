class Solution {
    fun findTheDifference(s: String, t: String): Char {
        var result = 0
        for (c in s) {
            result = result xor c.code
        }
        for (c in t) {
            result = result xor c.code
        }
        return result.toChar()
    }
}