class Solution {
    minOperations(s: string): number {
        let startZero = 0;
        let startOne = 0;
        for (let i = 0; i < s.length; i++) {
            const expectedZero = i % 2 === 0 ? "0" : "1";
            const expectedOne = i % 2 === 0 ? "1" : "0";
            if (s[i] !== expectedZero) startZero++;
            if (s[i] !== expectedOne) startOne++;
        }
        return Math.min(startZero, startOne);
    }
}