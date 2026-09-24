class Solution {
    maxLengthBetweenEqualCharacters(s: string): number {
        const first = new Array(26).fill(-1);
        let result = -1;
        for (let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97;
            if (first[index] === -1) {
                first[index] = i;
            } else {
                result = Math.max(result, i - first[index] - 1);
            }
        }
        return result;
    }
}