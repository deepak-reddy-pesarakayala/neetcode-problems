class Solution {
    fun singleNumber(nums: IntArray): IntArray {
        var xor = 0
        for (num in nums) {
            xor = xor xor num
        }
        val diffBit = xor and -xor
        var a = 0
        var b = 0
        for (num in nums) {
            if ((num and diffBit) == 0) {
                a = a xor num
            } else {
                b = b xor num
            }
        }
        return intArrayOf(a, b)
    }
}