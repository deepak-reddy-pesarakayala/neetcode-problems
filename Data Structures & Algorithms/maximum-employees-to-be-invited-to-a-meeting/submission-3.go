func maximumInvitations(favorite []int) int {
    n := len(favorite)
    indegree := make([]int, n)
    depth := make([]int, n)

    for i := 0; i < n; i++ {
        indegree[favorite[i]]++
    }

    q := make([]int, 0, n)

    for i := 0; i < n; i++ {
        if indegree[i] == 0 {
            q = append(q, i)
        }
    }

    for head := 0; head < len(q); head++ {
        u := q[head]
        v := favorite[u]

        if depth[u]+1 > depth[v] {
            depth[v] = depth[u] + 1
        }

        indegree[v]--

        if indegree[v] == 0 {
            q = append(q, v)
        }
    }

    maxCycle := 0
    pairSum := 0
    visited := make([]bool, n)

    for i := 0; i < n; i++ {
        if indegree[i] > 0 && !visited[i] {
            cycleLen := 0
            u := i

            for !visited[u] {
                visited[u] = true
                cycleLen++
                u = favorite[u]
            }

            if cycleLen == 2 {
                a := i
                b := favorite[i]
                pairSum += 2 + depth[a] + depth[b]
            } else if cycleLen > maxCycle {
                maxCycle = cycleLen
            }
        }
    }

    if pairSum > maxCycle {
        return pairSum
    }

    return maxCycle
}