class Solution {
    findLucky(arr: number[]): number {
        const count = new Array(501).fill(0);
        for (const num of arr) {
            count[num]++;
        }
        let result = -1;
        for (let i = 1; i <= 500; i++) {
            if (count[i] === i) {
                result = i;
            }
        }
        return result;
    }
}