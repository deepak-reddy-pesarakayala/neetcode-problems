class Solution {
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        const visited: boolean[] = new Array(n).fill(false);
        const dfs = (node: number, parent: number): boolean => {
            visited[node] = true;
            for (const neighbor of adj[node]) {
                if (neighbor === parent) continue;
                if (visited[neighbor] || !dfs(neighbor, node)) return false;
            }
            return true;
        };
        if (!dfs(0, -1)) return false;
        for (let i = 0; i < n; i++) {
            if (!visited[i]) return false;
        }
        return true;
    }
}