class Solution {
    fun maxScore(nums1: IntArray, nums2: IntArray, k: Int): Long {
        val n = nums1.size
        val pairs = Array(n) { IntArray(2) }
        for (i in 0 until n) {
            pairs[i][0] = nums1[i]
            pairs[i][1] = nums2[i]
        }
        pairs.sortWith(Comparator { a, b -> b[1].compareTo(a[1]) })
        val pq = java.util.PriorityQueue<Int>()
        var sum = 0L
        var maxScore = 0L
        for (i in 0 until n) {
            pq.offer(pairs[i][0])
            sum += pairs[i][0]
            if (pq.size > k) {
                sum -= pq.poll()
            }
            if (pq.size == k) {
                maxScore = Math.max(maxScore, sum * pairs[i][1])
            }
        }
        return maxScore
    }
}