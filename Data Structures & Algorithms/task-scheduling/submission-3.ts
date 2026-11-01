class Solution {
    leastInterval(tasks: string[], n: number): number {
        const freq = new Array(26).fill(0);

        for (const task of tasks) {
            freq[task.charCodeAt(0) - 65]++;
        }

        freq.sort((a, b) => b - a);

        const maxFreq = freq[0];
        const maxCount = freq.filter(f => f === maxFreq).length;

        return Math.max(
            tasks.length,
            (maxFreq - 1) * (n + 1) + maxCount
        );
    }
}