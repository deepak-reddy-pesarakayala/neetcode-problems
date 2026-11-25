class Solution {
    minimumCost(source, target, original, changed, cost) {
        const dist = Array.from(
            { length: 26 },
            () => Array(26).fill(Infinity)
        );

        for (let i = 0; i < 26; i++) {
            dist[i][i] = 0;
        }

        for (let i = 0; i < original.length; i++) {
            const u = original[i].charCodeAt(0) - 97;
            const v = changed[i].charCodeAt(0) - 97;

            dist[u][v] = Math.min(dist[u][v], cost[i]);
        }

        for (let k = 0; k < 26; k++) {
            for (let i = 0; i < 26; i++) {
                for (let j = 0; j < 26; j++) {
                    if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                        dist[i][j] = Math.min(
                            dist[i][j],
                            dist[i][k] + dist[k][j]
                        );
                    }
                }
            }
        }

        let answer = 0;

        for (let i = 0; i < source.length; i++) {
            if (source[i] === target[i]) continue;

            const u = source.charCodeAt(i) - 97;
            const v = target.charCodeAt(i) - 97;

            if (dist[u][v] === Infinity) {
                return -1;
            }

            answer += dist[u][v];
        }

        return answer;
    }
}