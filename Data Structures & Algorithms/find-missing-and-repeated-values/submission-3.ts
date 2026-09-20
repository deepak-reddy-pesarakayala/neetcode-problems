class Solution {
    findMissingAndRepeatedValues(grid: number[][]): number[] {
        const n = grid.length;
        const total = n * n;
        const seen = new Set<number>();
        let repeated = 0;
        for (const row of grid) {
            for (const num of row) {
                if (seen.has(num)) {
                    repeated = num;
                }
                seen.add(num);
            }
        }
        let missing = 0;
        for (let i = 1; i <= total; i++) {
            if (!seen.has(i)) {
                missing = i;
                break;
            }
        }
        return [repeated, missing];
    }
}