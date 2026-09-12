class Solution {
    minOperations(nums: number[]): number {
        const map = new Map<number, number>();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        let operations = 0;
        for (const count of map.values()) {
            if (count === 1) return -1;
            if (count % 3 === 0) {
                operations += count / 3;
            } else if (count % 3 === 1) {
                operations += (count - 4) / 3 + 2;
            } else {
                operations += Math.floor(count / 3) + 1;
            }
        }
        return operations;
    }
}