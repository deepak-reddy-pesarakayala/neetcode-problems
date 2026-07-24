class Solution {
    maxEnvelopes(envelopes) {
        envelopes.sort((a, b) => {
            if (a[0] === b[0]) return b[1] - a[1];
            return a[0] - b[0];
        });
        const lis = [];
        for (const [, h] of envelopes) {
            let left = 0;
            let right = lis.length;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (lis[mid] < h) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            lis[left] = h;
        }
        return lis.length;
    }
}