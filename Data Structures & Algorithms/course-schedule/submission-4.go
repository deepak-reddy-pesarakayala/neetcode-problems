func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := make([][]int, numCourses)

	for _, prerequisite := range prerequisites {
		course := prerequisite[0]
		required := prerequisite[1]
		graph[course] = append(graph[course], required)
	}

	visited := make([]bool, numCourses)
	path := make([]bool, numCourses)

	var dfs func(int) bool

	dfs = func(course int) bool {
		if path[course] {
			return false
		}

		if visited[course] {
			return true
		}

		visited[course] = true
		path[course] = true

		for _, prerequisite := range graph[course] {
			if !dfs(prerequisite) {
				return false
			}
		}

		path[course] = false
		return true
	}

	for course := 0; course < numCourses; course++ {
		if !dfs(course) {
			return false
		}
	}

	return true
}
