class Solution {
    findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
        const graph = new Map<string, string[]>();
        const indegree = new Map<string, number>();

        for (let i = 0; i < recipes.length; i++) {
            indegree.set(recipes[i], ingredients[i].length);

            for (const ingredient of ingredients[i]) {
                if (!graph.has(ingredient)) {
                    graph.set(ingredient, []);
                }

                graph.get(ingredient)!.push(recipes[i]);
            }
        }

        const queue = [...supplies];
        const result: string[] = [];

        let front = 0;

        while (front < queue.length) {
            const item = queue[front++];

            if (!graph.has(item)) continue;

            for (const recipe of graph.get(item)!) {
                indegree.set(recipe, indegree.get(recipe)! - 1);

                if (indegree.get(recipe) === 0) {
                    result.push(recipe);
                    queue.push(recipe);
                }
            }
        }

        return result;
    }
}