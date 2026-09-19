class Solution {
    kthDistinct(arr: string[], k: number): string {
        const frequency = new Map<string, number>();
        for (const str of arr) {
            frequency.set(str, (frequency.get(str) || 0) + 1);
        }
        for (const str of arr) {
            if (frequency.get(str) === 1) {
                k--;
                if (k === 0) return str;
            }
        }
        return "";
    }
}