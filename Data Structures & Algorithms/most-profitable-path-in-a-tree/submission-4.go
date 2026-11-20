func mostProfitablePath(edges [][]int, bob int, amount []int) int {
    n := len(amount)
    graph := make([][]int, n)

    for _, e := range edges {
        u, v := e[0], e[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
    }

    parent := make([]int, n)
    depth := make([]int, n)

    for i := range parent {
        parent[i] = -1
    }

    parent[0] = 0
    queue := []int{0}

    for head := 0; head < len(queue); head++ {
        node := queue[head]

        for _, next := range graph[node] {
            if parent[next] == -1 {
                parent[next] = node
                depth[next] = depth[node] + 1
                queue = append(queue, next)
            }
        }
    }

    bobTime := make([]int, n)
    for i := range bobTime {
        bobTime[i] = n
    }

    time := 0
    node := bob

    for node != 0 {
        bobTime[node] = time
        node = parent[node]
        time++
    }
    bobTime[0] = time

    answer := -int(^uint(0)>>1) - 1

    type State struct {
        node   int
        par    int
        time   int
        income int
    }

    stack := []State{{0, -1, 0, 0}}

    for len(stack) > 0 {
        cur := stack[len(stack)-1]
        stack = stack[:len(stack)-1]

        gain := 0

        if cur.time < bobTime[cur.node] {
            gain = amount[cur.node]
        } else if cur.time == bobTime[cur.node] {
            gain = amount[cur.node] / 2
        }

        income := cur.income + gain
        isLeaf := true

        for _, next := range graph[cur.node] {
            if next != cur.par {
                isLeaf = false
                stack = append(stack, State{
                    next,
                    cur.node,
                    cur.time + 1,
                    income,
                })
            }
        }

        if isLeaf {
            if income > answer {
                answer = income
            }
        }
    }

    return answer
}
