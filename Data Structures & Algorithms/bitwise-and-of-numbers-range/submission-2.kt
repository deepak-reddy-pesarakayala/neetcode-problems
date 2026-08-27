class Solution {
    fun rangeBitwiseAnd(left: Int, right: Int): Int {
        var l = left
        var r = right
        var shift = 0
        while (l != r) {
            l = l shr 1
            r = r shr 1
            shift++
        }
        return l shl shift
    }
}