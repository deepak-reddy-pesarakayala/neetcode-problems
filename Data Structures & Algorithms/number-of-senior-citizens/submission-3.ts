class Solution {
    countSeniors(details: string[]): number {
        let count = 0;
        for (const detail of details) {
            const age = Number(detail.substring(11, 13));
            if (age > 60) count++;
        }
        return count;
    }
}