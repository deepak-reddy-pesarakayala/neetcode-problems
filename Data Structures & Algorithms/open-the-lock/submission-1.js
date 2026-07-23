class Solution {
    openLock(deadends, target) {
        const dead = new Set(deadends);
        if (dead.has("0000")) return -1;
        const queue = [["0000", 0]];
        const visited = new Set(["0000"]);
        while (queue.length) {
            const [state, steps] = queue.shift();
            if (state === target) {
                return steps;
            }
            for (let i = 0; i < 4; i++) {
                const digit = Number(state[i]);
                for (const move of [-1, 1]) {
                    const nextDigit = (digit + move + 10) % 10;
                    const nextState =
                        state.slice(0, i) +
                        nextDigit +
                        state.slice(i + 1);
                    if (
                        !dead.has(nextState) &&
                        !visited.has(nextState)
                    ) {
                        visited.add(nextState);
                        queue.push([nextState, steps + 1]);
                    }
                }
            }
        }
        return -1;
    }
}