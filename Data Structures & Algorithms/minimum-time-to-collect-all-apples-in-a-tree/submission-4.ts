class Solution {
    minTime(n: number, edges: number[][], hasApple: boolean[]): number {
        const graph: number[][] = Array.from({ length: n }, () => []);
        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }
        const dfs = (node: number, parent: number): number => {
            let time = 0;
            for (const next of graph[node]) {
                if (next === parent) continue;
                const childTime = dfs(next, node);
                if (childTime > 0 || hasApple[next]) {
                    time += childTime + 2;
                }
            }
            return time;
        };
        return dfs(0, -1);
    }
}