class Solution {
    findLeastNumOfUniqueInts(arr, k) {
        const freq = new Map();

        for (const num of arr) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const frequencies = [...freq.values()].sort((a, b) => a - b);

        let distinct = frequencies.length;

        for (const count of frequencies) {
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