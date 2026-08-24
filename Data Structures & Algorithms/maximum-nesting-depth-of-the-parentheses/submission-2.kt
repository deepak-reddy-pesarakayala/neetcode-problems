class Solution {
    fun maxDepth(s: String): Int {
        var depth = 0
        var maxDepth = 0
        for (ch in s) {
            if (ch == '(') {
                depth++
                maxDepth = maxOf(maxDepth, depth)
            } else if (ch == ')') {
                depth--
            }
        }
        return maxDepth
    }
}
