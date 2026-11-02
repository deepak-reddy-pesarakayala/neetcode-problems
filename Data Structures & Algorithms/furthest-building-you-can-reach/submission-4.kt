class Solution {
    fun furthestBuilding(heights: IntArray, bricks: Int, ladders: Int): Int {
        val pq = PriorityQueue<Int>()
        var remainingBricks = bricks

        for (i in 0 until heights.size - 1) {
            val climb = heights[i + 1] - heights[i]

            if (climb > 0) {
                pq.offer(climb)

                if (pq.size > ladders) {
                    remainingBricks -= pq.poll()
                }

                if (remainingBricks < 0) {
                    return i
                }
            }
        }

        return heights.size - 1
    }
}