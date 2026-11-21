class Solution {
    slidingPuzzle(board) {
        const start = board.flat().join("");
        const target = "123450";

        const moves = [
            [1, 3],
            [0, 2, 4],
            [1, 5],
            [0, 4],
            [1, 3, 5],
            [2, 4]
        ];

        const queue = [[start, 0]];
        const visited = new Set([start]);
        let front = 0;

        while (front < queue.length) {
            const [state, steps] = queue[front++];

            if (state === target) {
                return steps;
            }

            const zero = state.indexOf("0");

            for (const next of moves[zero]) {
                const arr = state.split("");
                [arr[zero], arr[next]] = [arr[next], arr[zero]];

                const newState = arr.join("");

                if (!visited.has(newState)) {
                    visited.add(newState);
                    queue.push([newState, steps + 1]);
                }
            }
        }

        return -1;
    }
}