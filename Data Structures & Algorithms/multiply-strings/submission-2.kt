class Solution {
    fun multiply(num1: String, num2: String): String {
        if (num1 == "0" || num2 == "0") return "0"

        val result = IntArray(num1.length + num2.length)

        for (i in num1.indices.reversed()) {
            for (j in num2.indices.reversed()) {
                val n1 = num1[i] - '0'
                val n2 = num2[j] - '0'

                val product = n1 * n2
                val pos1 = i + j
                val pos2 = i + j + 1

                val sum = product + result[pos2]

                result[pos2] = sum % 10
                result[pos1] += sum / 10
            }
        }

        val sb = StringBuilder()
        var leadingZero = true

        for (digit in result) {
            if (digit == 0 && leadingZero) continue
            leadingZero = false
            sb.append(digit)
        }

        return sb.toString()
    }
}