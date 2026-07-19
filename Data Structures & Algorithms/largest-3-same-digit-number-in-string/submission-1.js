class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let answer = "";
        for (let i = 0; i <= num.length - 3; i++) {
            if (
                num[i] === num[i + 1] &&
                num[i] === num[i + 2]
            ) {
                const goodInteger = num.slice(i, i + 3);
                if (answer === "" || goodInteger > answer) {
                    answer = goodInteger;
                }
            }
        }
        return answer;
    }
}