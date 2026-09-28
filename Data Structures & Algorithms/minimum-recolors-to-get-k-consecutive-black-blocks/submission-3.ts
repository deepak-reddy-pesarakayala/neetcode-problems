class Solution {
    minimumRecolors(blocks: string, k: number): number {
        let whites = 0;
        let minOperations = k;
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i] === "W") whites++;
            if (i >= k && blocks[i - k] === "W") whites--;
            if (i >= k - 1) minOperations = Math.min(minOperations, whites);
        }
        return minOperations;
    }
}