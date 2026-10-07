class Solution {
    kthSmallestProduct(nums1: number[], nums2: number[], k: number): number {
        const countLE = (x: number): number => {
            let count = 0;
            for (const a of nums1) {
                if (a > 0) {
                    let left = 0;
                    let right = nums2.length;
                    while (left < right) {
                        const mid = Math.floor((left + right) / 2);
                        if (a * nums2[mid] <= x) left = mid + 1;
                        else right = mid;
                    }
                    count += left;
                } else if (a < 0) {
                    let left = 0;
                    let right = nums2.length;
                    while (left < right) {
                        const mid = Math.floor((left + right) / 2);
                        if (a * nums2[mid] <= x) right = mid;
                        else left = mid + 1;
                    }
                    count += nums2.length - left;
                } else if (x >= 0) {
                    count += nums2.length;
                }
            }
            return count;
        };
        let left = -10000000000;
        let right = 10000000000;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (countLE(mid) >= k) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}