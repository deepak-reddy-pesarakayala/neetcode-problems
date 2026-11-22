func findAllPeople(n int, meetings [][]int, firstPerson int) []int {
    sort.Slice(meetings, func(i, j int) bool {
        return meetings[i][2] < meetings[j][2]
    })

    know := make([]bool, n)
    know[0] = true
    know[firstPerson] = true

    for i := 0; i < len(meetings); {
        j := i

        graph := make(map[int][]int)
        participants := make([]int, 0)

        for j < len(meetings) && meetings[j][2] == meetings[i][2] {
            a, b := meetings[j][0], meetings[j][1]

            if _, ok := graph[a]; !ok {
                participants = append(participants, a)
            }
            if _, ok := graph[b]; !ok {
                participants = append(participants, b)
            }

            graph[a] = append(graph[a], b)
            graph[b] = append(graph[b], a)

            j++
        }

        queue := []int{}
        visited := make(map[int]bool)

        for _, person := range participants {
            if know[person] {
                queue = append(queue, person)
                visited[person] = true
            }
        }

        for head := 0; head < len(queue); head++ {
            person := queue[head]
            know[person] = true

            for _, next := range graph[person] {
                if !visited[next] {
                    visited[next] = true
                    queue = append(queue, next)
                }
            }
        }

        i = j
    }

    result := []int{}

    for i := 0; i < n; i++ {
        if know[i] {
            result = append(result, i)
        }
    }

    return result
}
