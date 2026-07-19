class Solution {
    maxNumberOfBalloons(text) {
        const count = new Array(26).fill(0);
        for (const ch of text) {
            count[ch.charCodeAt(0) - 97]++;
        }
        const b = count['b'.charCodeAt(0) - 97];
        const a = count['a'.charCodeAt(0) - 97];
        const l = Math.floor(count['l'.charCodeAt(0) - 97] / 2);
        const o = Math.floor(count['o'.charCodeAt(0) - 97] / 2);
        const n = count['n'.charCodeAt(0) - 97];
        return Math.min(b, a, l, o, n);
    }
}