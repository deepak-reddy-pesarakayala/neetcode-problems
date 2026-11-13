func checkMove(board [][]byte, rMove int, cMove int, color byte) bool {
    directions := [][2]int{
        {-1, -1}, {-1, 0}, {-1, 1},
        {0, -1},           {0, 1},
        {1, -1},  {1, 0},  {1, 1},
    }

    opposite := byte('B')
    if color == 'B' {
        opposite = 'W'
    }

    for _, d := range directions {
        r := rMove + d[0]
        c := cMove + d[1]
        count := 0

        for r >= 0 && r < 8 && c >= 0 && c < 8 {
            if board[r][c] == opposite {
                count++
            } else if board[r][c] == color {
                if count >= 1 {
                    return true
                }
                break
            } else {
                break
            }

            r += d[0]
            c += d[1]
        }
    }

    return false
}