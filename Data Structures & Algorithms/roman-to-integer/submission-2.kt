class Solution {
    fun romanToInt(s: String): Int {
        val values = mapOf(
            'I' to 1,
            'V' to 5,
            'X' to 10,
            'L' to 50,
            'C' to 100,
            'D' to 500,
            'M' to 1000
        )

        var result = 0

        for (i in s.indices) {
            val current = values[s[i]]!!

            if (i + 1 < s.length && current < values[s[i + 1]]!!) {
                result -= current
            } else {
                result += current
            }
        }

        return result
    }
}