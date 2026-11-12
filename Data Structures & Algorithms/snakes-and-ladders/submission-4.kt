class Solution {
    fun snakesAndLadders(board: Array<IntArray>): Int {
        val n = board.size
        val total = n * n
        val visited = BooleanArray(total + 1)
        val queue = java.util.ArrayDeque<Int>()

        queue.add(1)
        visited[1] = true

        var moves = 0

        while (queue.isNotEmpty()) {
            val size = queue.size

            repeat(size) {
                val current = queue.remove()

                if (current == total) return moves

                for (dice in 1..6) {
                    val next = current + dice
                    if (next > total) break

                    val rowFromBottom = (next - 1) / n
                    val colInRow = (next - 1) % n

                    val row = n - 1 - rowFromBottom
                    val col = if (rowFromBottom % 2 == 0) {
                        colInRow
                    } else {
                        n - 1 - colInRow
                    }

                    val destination = if (board[row][col] == -1) {
                        next
                    } else {
                        board[row][col]
                    }

                    if (!visited[destination]) {
                        visited[destination] = true
                        queue.add(destination)
                    }
                }
            }

            moves++
        }

        return -1
    }
}