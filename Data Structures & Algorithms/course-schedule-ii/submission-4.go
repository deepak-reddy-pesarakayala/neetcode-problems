func findOrder(numCourses int, prerequisites [][]int) []int {
    graph := make([][]int, numCourses)
    indegree := make([]int, numCourses)

    for _, p := range prerequisites {
        a, b := p[0], p[1]
        graph[b] = append(graph[b], a)
        indegree[a]++
    }

    queue := []int{}
    for i := 0; i < numCourses; i++ {
        if indegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    result := []int{}

    for head := 0; head < len(queue); head++ {
        course := queue[head]
        result = append(result, course)

        for _, next := range graph[course] {
            indegree[next]--
            if indegree[next] == 0 {
                queue = append(queue, next)
            }
        }
    }

    if len(result) != numCourses {
        return []int{}
    }

    return result
}