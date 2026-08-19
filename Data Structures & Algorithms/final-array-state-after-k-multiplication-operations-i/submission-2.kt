class Solution {
    fun getFinalState(nums: IntArray, k: Int, multiplier: Int): IntArray {
        val pq = PriorityQueue<Int> { a, b ->
            if (nums[a] != nums[b]) {
                nums[a].compareTo(nums[b])
            } else {
                a.compareTo(b)
            }
        }
        for (i in nums.indices) {
            pq.offer(i)
        }
        repeat(k) {
            val index = pq.poll()
            nums[index] *= multiplier
            pq.offer(index)
        }
        return nums
    }
}
