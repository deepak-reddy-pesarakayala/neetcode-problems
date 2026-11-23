class Solution {
    findItinerary(tickets: string[][]): string[] {
        const graph = new Map<string, string[]>();

        for (const [from, to] of tickets) {
            if (!graph.has(from)) graph.set(from, []);
            graph.get(from)!.push(to);
        }

        for (const destinations of graph.values()) {
            destinations.sort().reverse();
        }

        const result: string[] = [];

        const dfs = (airport: string) => {
            const destinations = graph.get(airport);

            while (destinations && destinations.length > 0) {
                const next = destinations.pop()!;
                dfs(next);
            }

            result.push(airport);
        };

        dfs("JFK");

        return result.reverse();
    }
}
