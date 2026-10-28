class Solution {
    fun smallestNumber(pattern: String): String {
        val result = StringBuilder()
        val stack = java.util.Stack<Int>()
        for (i in 0..pattern.length) {
            stack.push(i + 1)
            if (i == pattern.length || pattern[i] == 'I') {
                while (stack.isNotEmpty()) {
                    result.append(stack.pop())
                }
            }
        }
        return result.toString()
    }
}