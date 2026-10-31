class Solution {
    lastStoneWeight(stones: number[]): number {
        while (stones.length > 1) {
            stones.sort((a, b) => b - a);

            const y = stones.shift()!;
            const x = stones.shift()!;

            if (x !== y) {
                stones.push(y - x);
            }
        }

        return stones.length === 0 ? 0 : stones[0];
    }
}