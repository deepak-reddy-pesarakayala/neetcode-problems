class Solution {
    fun maximumOddBinaryNumber(s: String): String {
        val ones = s.count { it == '1' }
        val zeros = s.length - ones
        return "1".repeat(ones - 1) + "0".repeat(zeros) + "1"
    }
}
