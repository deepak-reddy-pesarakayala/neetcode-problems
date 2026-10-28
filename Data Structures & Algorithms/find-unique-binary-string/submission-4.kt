class Solution {
    fun findDifferentBinaryString(nums: Array<String>): String {
        val result = StringBuilder()
        for (i in nums.indices) {
            result.append(if (nums[i][i] == '0') '1' else '0')
        }
        return result.toString()
    }
}