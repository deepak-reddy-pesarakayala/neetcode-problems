func findAllRecipes(recipes []string, ingredients [][]string, supplies []string) []string {
    graph := make(map[string][]string)
    indegree := make(map[string]int)

    for i, recipe := range recipes {
        indegree[recipe] = len(ingredients[i])

        for _, ingredient := range ingredients[i] {
            graph[ingredient] = append(graph[ingredient], recipe)
        }
    }

    queue := make([]string, 0)
    for _, supply := range supplies {
        queue = append(queue, supply)
    }

    result := []string{}

    for head := 0; head < len(queue); head++ {
        item := queue[head]

        for _, recipe := range graph[item] {
            indegree[recipe]--

            if indegree[recipe] == 0 {
                result = append(result, recipe)
                queue = append(queue, recipe)
            }
        }
    }

    return result
}