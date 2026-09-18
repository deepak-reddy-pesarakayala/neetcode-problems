class Solution {
    maxDifference(s: string): number {
        const freq = new Array(26).fill(0);
        for (const ch of s) {
            freq[ch.charCodeAt(0) - 97]++;
        }
        let oddMax = 0;
        let evenMin = Infinity;
        for (const count of freq) {
            if (count % 2 === 1) {
                oddMax = Math.max(oddMax, count);
            } else if (count > 0) {
                evenMin = Math.min(evenMin, count);
            }
        }
        return oddMax - evenMin;
    }
}