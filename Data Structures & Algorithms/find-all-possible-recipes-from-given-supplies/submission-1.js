class Solution {
    findAllRecipes(recipes, ingredients, supplies) {
        const graph = new Map();
        const indegree = new Map();

        for (let i = 0; i < recipes.length; i++) {
            indegree.set(recipes[i], ingredients[i].length);

            for (const item of ingredients[i]) {
                if (!graph.has(item)) {
                    graph.set(item, []);
                }

                graph.get(item).push(recipes[i]);
            }
        }

        const queue = [...supplies];
        const result = [];
        let front = 0;

        while (front < queue.length) {
            const item = queue[front++];

            if (!graph.has(item)) continue;

            for (const recipe of graph.get(item)) {
                indegree.set(recipe, indegree.get(recipe) - 1);

                if (indegree.get(recipe) === 0) {
                    result.push(recipe);
                    queue.push(recipe);
                }
            }
        }

        return result;
    }
}