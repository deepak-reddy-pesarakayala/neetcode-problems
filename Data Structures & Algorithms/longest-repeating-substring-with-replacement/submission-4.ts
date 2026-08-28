class Solution {
    characterReplacement(s: string, k: number): number {
        const charCounts = new Array<number>(26).fill(0);
        let left = 0;
        let maxFrequency = 0;
        let maxLength = 0;
        for (let right = 0; right < s.length; right++) {
            const rightIndex = s.charCodeAt(right) - 65; 
            charCounts[rightIndex]++;
            maxFrequency = Math.max(maxFrequency, charCounts[rightIndex]);
            if ((right - left + 1) - maxFrequency > k) {
                const leftIndex = s.charCodeAt(left) - 65;
                charCounts[leftIndex]--;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}