class Solution {
    largestGoodInteger(num: string): string {
        let result = "";
        for (let i = 0; i <= num.length - 3; i++) {
            if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
                const current = num.slice(i, i + 3);
                if (result === "" || current > result) {
                    result = current;
                }
            }
        }
        return result;
    }
}