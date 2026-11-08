class Solution {
    fun leftmostBuildingQueries(heights: IntArray, queries: Array<IntArray>): IntArray {
        val n = heights.size
        val size = 4 * n
        val tree = IntArray(size)

        fun build(node: Int, start: Int, end: Int) {
            if (start == end) {
                tree[node] = heights[start]
                return
            }

            val mid = (start + end) / 2
            build(node * 2, start, mid)
            build(node * 2 + 1, mid + 1, end)
            tree[node] = maxOf(tree[node * 2], tree[node * 2 + 1])
        }

        fun search(node: Int, start: Int, end: Int, left: Int, target: Int): Int {
            if (end < left || tree[node] <= target) return -1
            if (start == end) return start

            val mid = (start + end) / 2
            val first = search(node * 2, start, mid, left, target)

            if (first != -1) return first

            return search(node * 2 + 1, mid + 1, end, left, target)
        }

        build(1, 0, n - 1)

        val result = IntArray(queries.size) { -1 }

        for (i in queries.indices) {
            val a = minOf(queries[i][0], queries[i][1])
            val b = maxOf(queries[i][0], queries[i][1])

            if (a == b) {
                result[i] = a
            } else if (heights[a] < heights[b]) {
                result[i] = b
            } else {
                result[i] = search(1, 0, n - 1, b + 1, heights[a])
            }
        }

        return result
    }
}