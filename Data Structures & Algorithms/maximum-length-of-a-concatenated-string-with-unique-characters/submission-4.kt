class Solution {
    fun maxLength(arr: Array<String>): Int {
        val masks = mutableListOf<Int>()
        for (s in arr) {
            var mask = 0
            var valid = true
            for (c in s) {
                val bit = 1 shl (c - 'a')
                if ((mask and bit) != 0) {
                    valid = false
                    break
                }
                mask = mask or bit
            }
            if (valid) masks.add(mask)
        }
        fun backtrack(index: Int, mask: Int): Int {
            if (index == masks.size) return Integer.bitCount(mask)
            var result = backtrack(index + 1, mask)
            if ((mask and masks[index]) == 0) {
                result = maxOf(result, backtrack(index + 1, mask or masks[index]))
            }
            return result
        }
        return backtrack(0, 0)
    }
}