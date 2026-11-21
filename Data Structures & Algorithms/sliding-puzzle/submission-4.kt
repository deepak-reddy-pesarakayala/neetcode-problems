class Solution {
    fun slidingPuzzle(board: Array<IntArray>): Int {
        val start = board.flatMap { it.toList() }.joinToString("")
        val target = "123450"

        val moves = arrayOf(
            intArrayOf(1, 3),
            intArrayOf(0, 2, 4),
            intArrayOf(1, 5),
            intArrayOf(0, 4),
            intArrayOf(1, 3, 5),
            intArrayOf(2, 4)
        )

        val queue = ArrayDeque<Pair<String, Int>>()
        val visited = HashSet<String>()

        queue.add(start to 0)
        visited.add(start)

        while (queue.isNotEmpty()) {
            val (state, steps) = queue.removeFirst()

            if (state == target) return steps

            val zero = state.indexOf('0')

            for (next in moves[zero]) {
                val chars = state.toCharArray()
                chars[zero] = chars[next]
                chars[next] = '0'

                val newState = String(chars)

                if (newState !in visited) {
                    visited.add(newState)
                    queue.add(newState to steps + 1)
                }
            }
        }

        return -1
    }
}