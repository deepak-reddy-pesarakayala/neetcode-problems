class Solution {
    fun rangeSum(nums: IntArray, n: Int, left: Int, right: Int): Int {
        val sums = ArrayList<Int>()

        for (i in nums.indices) {
            var sum = 0
            for (j in i until n) {
                sum += nums[j]
                sums.add(sum)
            }
        }

        sums.sort()

        var answer = 0L
        for (i in left - 1 until right) {
            answer = (answer + sums[i]) % 1000000007
        }

        return answer.toInt()
    }
}