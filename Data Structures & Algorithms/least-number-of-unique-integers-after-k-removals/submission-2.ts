class Solution {
    findLeastNumOfUniqueInts(arr: number[], k: number): number {
        const freq = new Map<number, number>();

        for (const num of arr) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const counts = Array.from(freq.values()).sort((a, b) => a - b);

        let distinct = counts.length;

        for (const count of counts) {
            if (k >= count) {
                k -= count;
                distinct--;
            } else {
                break;
            }
        }

        return distinct;
    }
}