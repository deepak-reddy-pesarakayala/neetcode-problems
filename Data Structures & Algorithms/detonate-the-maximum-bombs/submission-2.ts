class Solution {
    maximumDetonation(bombs: number[][]): number {
        const n = bombs.length;
        const graph: number[][] = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            const [x1, y1, r] = bombs[i];

            for (let j = 0; j < n; j++) {
                if (i === j) continue;

                const [x2, y2] = bombs[j];

                const dx = x1 - x2;
                const dy = y1 - y2;

                if (dx * dx + dy * dy <= r * r) {
                    graph[i].push(j);
                }
            }
        }

        let answer = 0;

        for (let i = 0; i < n; i++) {
            const visited = new Set<number>();
            const stack = [i];
            visited.add(i);

            while (stack.length > 0) {
                const node = stack.pop()!;

                for (const neighbor of graph[node]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        stack.push(neighbor);
                    }
                }
            }

            answer = Math.max(answer, visited.size);
        }

        return answer;
    }
}