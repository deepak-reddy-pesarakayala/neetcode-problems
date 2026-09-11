class Solution {
    largestNumber(nums: number[]): string {
        nums.sort((a, b) => {
            const x = String(a);
            const y = String(b);
            return (y + x).localeCompare(x + y);
        });
        if (nums[0] === 0) return "0";
        return nums.join("");
    }
}