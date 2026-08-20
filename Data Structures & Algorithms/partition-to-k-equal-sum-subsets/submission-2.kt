class Solution {
    fun canPartitionKSubsets(nums: IntArray, k: Int): Boolean {
        val total = nums.sum()
        if (total % k != 0) return false
        val target = total / k
        nums.sortDescending()
        if (nums[0] > target) return false
        val used = BooleanArray(nums.size)
        fun backtrack(start: Int, groups: Int, currentSum: Int): Boolean {
            if (groups == 1) return true
            if (currentSum == target) return backtrack(0, groups - 1, 0)
            var previous = -1
            for (i in start until nums.size) {
                if (used[i] || nums[i] == previous || currentSum + nums[i] > target) continue
                used[i] = true
                if (backtrack(i + 1, groups, currentSum + nums[i])) return true
                used[i] = false
                previous = nums[i]
                if (currentSum == 0) break
            }
            return false
        }
        return backtrack(0, k, 0)
    }
}