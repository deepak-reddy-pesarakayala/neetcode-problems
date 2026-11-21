func slidingPuzzle(board [][]int) int {
    start := ""
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            start += string(rune('0' + board[i][j]))
        }
    }

    target := "123450"

    moves := [][]int{
        {1, 3},
        {0, 2, 4},
        {1, 5},
        {0, 4},
        {1, 3, 5},
        {2, 4},
    }

    queue := []string{start}
    visited := map[string]bool{start: true}
    steps := 0

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            state := queue[0]
            queue = queue[1:]

            if state == target {
                return steps
            }

            zero := 0
            for zero < 6 && state[zero] != '0' {
                zero++
            }

            for _, next := range moves[zero] {
                chars := []byte(state)
                chars[zero], chars[next] = chars[next], chars[zero]

                newState := string(chars)

                if !visited[newState] {
                    visited[newState] = true
                    queue = append(queue, newState)
                }
            }
        }

        steps++
    }

    return -1
}
