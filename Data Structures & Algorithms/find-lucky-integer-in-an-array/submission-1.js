class Solution {
    findLucky(arr) {
        const freq = new Array(501).fill(0);
        for (const num of arr) {
            freq[num]++;
        }
        let ans = -1;
        for (let i = 1; i <= 500; i++) {
            if (freq[i] === i) {
                ans = i;
            }
        }
        return ans;
    }
}