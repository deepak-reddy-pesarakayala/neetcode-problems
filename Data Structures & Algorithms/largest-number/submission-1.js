class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {
        const arr = nums.map(String);
        arr.sort((a, b) => {
            const ab = a + b;
            const ba = b + a;
            if (ab > ba) return -1;
            if (ab < ba) return 1;
            return 0;
        });
        if (arr[0] === "0") return "0";
        return arr.join("");
    }
}