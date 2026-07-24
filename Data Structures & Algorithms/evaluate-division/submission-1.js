class Solution {
    calcEquation(equations, values, queries) {
        const graph = new Map();
        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            const val = values[i];
            if (!graph.has(a)) graph.set(a, []);
            if (!graph.has(b)) graph.set(b, []);
            graph.get(a).push([b, val]);
            graph.get(b).push([a, 1 / val]);
        }
        const dfs = (src, target, visited) => {
            if (!graph.has(src) || !graph.has(target)) {
                return -1.0;
            }
            if (src === target) {
                return 1.0;
            }
            visited.add(src);
            for (const [next, weight] of graph.get(src)) {
                if (!visited.has(next)) {
                    const result = dfs(next, target, visited);
                    if (result !== -1.0) {
                        return weight * result;
                    }
                }
            }
            return -1.0;
        };
        const answer = []; 
        for (const [src, target] of queries) {
            answer.push(dfs(src, target, new Set()));
        }
        return answer;
    }
}