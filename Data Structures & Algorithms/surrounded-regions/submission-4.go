func solve(board [][]byte) {
    rows := len(board)
    cols := len(board[0])

    var dfs func(int, int)

    dfs = func(r, c int) {
        if r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] != 'O' {
            return
        }

        board[r][c] = 'T'

        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    }

    for i := 0; i < rows; i++ {
        dfs(i, 0)
        dfs(i, cols-1)
    }

    for j := 0; j < cols; j++ {
        dfs(0, j)
        dfs(rows-1, j)
    }

    for i := 0; i < rows; i++ {
        for j := 0; j < cols; j++ {
            if board[i][j] == 'O' {
                board[i][j] = 'X'
            } else if board[i][j] == 'T' {
                board[i][j] = 'O'
            }
        }
    }
}