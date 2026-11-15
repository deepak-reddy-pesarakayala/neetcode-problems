class Solution {
    minimumFuelCost(roads, seats) {
        const n = roads.length + 1;
        const graph = Array.from({ length: n }, () => []);

        for (const [u, v] of roads) {
            graph[u].push(v);
            graph[v].push(u);
        }

        const parent = Array(n).fill(-1);
        const order = [0];
        parent[0] = 0;

        for (let i = 0; i < order.length; i++) {
            const node = order[i];

            for (const next of graph[node]) {
                if (next !== parent[node]) {
                    parent[next] = node;
                    order.push(next);
                }
            }
        }

        const people = Array(n).fill(1);
        let fuel = 0;

        for (let i = order.length - 1; i > 0; i--) {
            const node = order[i];
            const cars = Math.ceil(people[node] / seats);

            fuel += cars;
            people[parent[node]] += people[node];
        }

        return fuel;
    }
}