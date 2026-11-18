class Solution {
    fun findAllRecipes(
        recipes: Array<String>,
        ingredients: List<List<String>>,
        supplies: Array<String>
    ): List<String> {
        val graph = HashMap<String, MutableList<String>>()
        val indegree = HashMap<String, Int>()

        for (i in recipes.indices) {
            indegree[recipes[i]] = ingredients[i].size

            for (ingredient in ingredients[i]) {
                graph.getOrPut(ingredient) { mutableListOf() }.add(recipes[i])
            }
        }

        val queue = ArrayDeque<String>()

        for (supply in supplies) {
            queue.add(supply)
        }

        val result = mutableListOf<String>()

        while (queue.isNotEmpty()) {
            val item = queue.removeFirst()

            if (indegree.containsKey(item)) {
                result.add(item)
            }

            for (recipe in graph[item] ?: emptyList()) {
                indegree[recipe] = indegree[recipe]!! - 1

                if (indegree[recipe] == 0) {
                    queue.add(recipe)
                }
            }
        }

        return result
    }
}
