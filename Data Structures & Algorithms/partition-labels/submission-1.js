class Solution {
    partitionLabels(s) {
        const lastIndex = new Array(26).fill(-1);
        for (let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97;
            lastIndex[index] = i;
        }
        const result = [];
        let start = 0;
        let end = 0;
        for (let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97;
            end = Math.max(end, lastIndex[index]);
            if (i === end) {
                result.push(end - start + 1);
                start = i + 1;
            }
        }
        return result;
    }
}