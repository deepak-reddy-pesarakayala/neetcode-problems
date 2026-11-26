func largestIsland(grid [][]int) int {
    n := len(grid)
    dirs := [][2]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}

    size := map[int]int{0: 0}
    id := 2

    var dfs func(int, int) int
    dfs = func(r, c int) int {
        if r < 0 || r >= n || c < 0 || c >= n || grid[r][c] != 1 {
            return 0
        }

        grid[r][c] = id
        area := 1

        for _, d := range dirs {
            area += dfs(r+d[0], c+d[1])
        }

        return area
    }

    ans := 0

    for r := 0; r < n; r++ {
        for c := 0; c < n; c++ {
            if grid[r][c] == 1 {
                area := dfs(r, c)
                size[id] = area
                if area > ans {
                    ans = area
                }
                id++
            }
        }
    }

    for r := 0; r < n; r++ {
        for c := 0; c < n; c++ {
            if grid[r][c] == 0 {
                seen := make(map[int]bool)
                area := 1

                for _, d := range dirs {
                    nr, nc := r+d[0], c+d[1]

                    if nr >= 0 && nr < n && nc >= 0 && nc < n {
                        islandID := grid[nr][nc]
                        if !seen[islandID] {
                            area += size[islandID]
                            seen[islandID] = true
                        }
                    }
                }

                if area > ans {
                    ans = area
                }
            }
        }
    }

    return ans
}