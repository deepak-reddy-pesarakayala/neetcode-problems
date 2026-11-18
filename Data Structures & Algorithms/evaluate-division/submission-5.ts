class Solution {
    calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
        const graph = new Map<string, [string, number][]>();

        for (let i = 0; i < equations.length; i++) {
            const [a, b] = equations[i];
            const value = values[i];

            if (!graph.has(a)) graph.set(a, []);
            if (!graph.has(b)) graph.set(b, []);

            graph.get(a)!.push([b, value]);
            graph.get(b)!.push([a, 1 / value]);
        }

        const result: number[] = [];

        for (const [start, end] of queries) {
            if (!graph.has(start) || !graph.has(end)) {
                result.push(-1);
                continue;
            }

            if (start === end) {
                result.push(1);
                continue;
            }

            const visited = new Set<string>();
            const stack: [string, number][] = [[start, 1]];
            visited.add(start);

            let answer = -1;

            while (stack.length > 0) {
                const [node, product] = stack.pop()!;

                if (node === end) {
                    answer = product;
                    break;
                }

                for (const [neighbor, weight] of graph.get(node)!) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        stack.push([neighbor, product * weight]);
                    }
                }
            }

            result.push(answer);
        }

        return result;
    }
}