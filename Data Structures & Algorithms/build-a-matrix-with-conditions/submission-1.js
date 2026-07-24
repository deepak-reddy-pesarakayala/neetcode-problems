class Solution {
    buildMatrix(k, rowConditions, colConditions) {
        const topoSort = (conditions) => {
            const graph = Array.from({ length: k + 1 }, () => []);
            const indegree = Array(k + 1).fill(0);
            for (const [u, v] of conditions) {
                graph[u].push(v);
                indegree[v]++;
            }
            const queue = [];
            for (let i = 1; i <= k; i++) {
                if (indegree[i] === 0) queue.push(i);
            }
            const order = [];
            while (queue.length) {
                const node = queue.shift();
                order.push(node);
                for (const nei of graph[node]) {
                    indegree[nei]--;
                    if (indegree[nei] === 0) {
                        queue.push(nei);
                    }
                }
            }
            return order.length === k ? order : [];
        };
        const rowOrder = topoSort(rowConditions);
        const colOrder = topoSort(colConditions);
        if (rowOrder.length === 0 || colOrder.length === 0) {
            return [];
        }
        const rowPos = {};
        const colPos = {};
        for (let i = 0; i < k; i++) {
            rowPos[rowOrder[i]] = i;
            colPos[colOrder[i]] = i;
        }
        const matrix = Array.from({ length: k }, () => Array(k).fill(0));
        for (let num = 1; num <= k; num++) {
            matrix[rowPos[num]][colPos[num]] = num;
        }
        return matrix;
    }
}