class Solution {
    fun beautifulSubsets(nums: IntArray, k: Int): Int {
        var count = 0
        val n = nums.size
        for (mask in 1 until (1 shl n)) {
            val chosen = HashSet<Int>()
            var valid = true
            for (i in 0 until n) {
                if ((mask and (1 shl i)) != 0) {
                    if (chosen.contains(nums[i] - k) ||
                        chosen.contains(nums[i] + k)) {
                        valid = false
                        break
                    }
                    chosen.add(nums[i])
                }
            }
            if (valid) count++
        }
        return count
    }
}