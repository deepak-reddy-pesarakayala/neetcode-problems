func snakesAndLadders(board [][]int) int {
    n := len(board)
    target := n * n

    visited := make([]bool, target+1)
    queue := []int{1}
    visited[1] = true
    moves := 0

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            curr := queue[0]
            queue = queue[1:]

            if curr == target {
                return moves
            }

            for dice := 1; dice <= 6 && curr+dice <= target; dice++ {
                next := curr + dice

                rowFromBottom := (next - 1) / n
                col := (next - 1) % n

                row := n - 1 - rowFromBottom

                if rowFromBottom%2 == 1 {
                    col = n - 1 - col
                }

                if board[row][col] != -1 {
                    next = board[row][col]
                }

                if !visited[next] {
                    visited[next] = true
                    queue = append(queue, next)
                }
            }
        }

        moves++
    }

    return -1
}