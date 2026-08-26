class Solution {
    fun convertToTitle(columnNumber: Int): String {
        var n = columnNumber
        val result = StringBuilder()
        while (n > 0) {
            n--
            result.append(('A'.code + n % 26).toChar())
            n /= 26
        }
        return result.reverse().toString()
    }
}