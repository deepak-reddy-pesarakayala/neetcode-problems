func checkIfPrerequisite(numCourses int, prerequisites [][]int, queries [][]int) []bool {
    reachable := make([][]bool, numCourses)

    for i := 0; i < numCourses; i++ {
        reachable[i] = make([]bool, numCourses)
    }

    for _, p := range prerequisites {
        a, b := p[0], p[1]
        reachable[a][b] = true
    }

    for k := 0; k < numCourses; k++ {
        for i := 0; i < numCourses; i++ {
            for j := 0; j < numCourses; j++ {
                if reachable[i][k] && reachable[k][j] {
                    reachable[i][j] = true
                }
            }
        }
    }

    answer := make([]bool, len(queries))

    for i, q := range queries {
        u, v := q[0], q[1]
        answer[i] = reachable[u][v]
    }

    return answer
}