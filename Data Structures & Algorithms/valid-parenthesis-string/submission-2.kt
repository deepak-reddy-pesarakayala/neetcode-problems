class Solution {
    fun checkValidString(s: String): Boolean {
        var minOpen = 0
        var maxOpen = 0
        for (c in s) {
            if (c == '(') {
                minOpen++
                maxOpen++
            } else if (c == ')') {
                minOpen--
                maxOpen--
            } else {
                minOpen--
                maxOpen++
            }
            if (maxOpen < 0) return false
            minOpen = maxOf(0, minOpen)
        }
        return minOpen == 0
    }
}