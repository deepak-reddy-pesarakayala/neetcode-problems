
class Solution {
    openLock(deadends: string[], target: string): number {
        const dead = new Set(deadends);

        if (dead.has("0000")) return -1;
        if (target === "0000") return 0;

        const visited = new Set<string>();
        const queue: [string, number][] = [["0000", 0]];

        visited.add("0000");

        let head = 0;

        while (head < queue.length) {
            const [current, turns] = queue[head++];

            if (current === target) return turns;

            for (let i = 0; i < 4; i++) {
                const digit = Number(current[i]);

                for (const change of [-1, 1]) {
                    const nextDigit = (digit + change + 10) % 10;

                    const next =
                        current.substring(0, i) +
                        nextDigit +
                        current.substring(i + 1);

                    if (!dead.has(next) && !visited.has(next)) {
                        if (next === target) return turns + 1;

                        visited.add(next);
                        queue.push([next, turns + 1]);
                    }
                }
            }
        }

        return -1;
    }
}
