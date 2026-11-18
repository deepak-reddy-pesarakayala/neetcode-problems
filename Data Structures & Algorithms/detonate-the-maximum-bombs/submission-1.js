class Solution {
    maximumDetonation(bombs) {
        const n = bombs.length;
        const graph = Array.from({ length: n }, () => []);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) continue;

                const dx = bombs[i][0] - bombs[j][0];
                const dy = bombs[i][1] - bombs[j][1];
                const r = bombs[i][2];

                if (dx * dx + dy * dy <= r * r) {
                    graph[i].push(j);
                }
            }
        }

        let answer = 0;

        for (let i = 0; i < n; i++) {
            const visited = new Set([i]);
            const stack = [i];

            while (stack.length > 0) {
                const node = stack.pop();

                for (const next of graph[node]) {
                    if (!visited.has(next)) {
                        visited.add(next);
                        stack.push(next);
                    }
                }
            }

            answer = Math.max(answer, visited.size);
        }

        return answer;
    }
}