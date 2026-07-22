class Solution {
    kthSmallestProduct(nums1, nums2, k) {
        const countLE = (x) => {
            let count = 0n;
            const m = nums2.length;
            for (const a of nums1) {
                if (a > 0) {
                    const target = Math.floor(x / a);
                    let l = 0, r = m;
                    while (l < r) {
                        const mid = Math.floor((l + r) / 2);
                        if (nums2[mid] <= target) l = mid + 1;
                        else r = mid;
                    }
                    count += BigInt(l);
                } else if (a < 0) {
                    const target = Math.ceil(x / a);
                    let l = 0, r = m;
                    while (l < r) {
                        const mid = Math.floor((l + r) / 2);
                        if (nums2[mid] < target) l = mid + 1;
                        else r = mid;
                    }
                    count += BigInt(m - l);
                } else {
                    if (x >= 0) count += BigInt(m);
                }
            }
            return count;
        };
        let left = -10000000000;
        let right = 10000000000;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (countLE(mid) >= BigInt(k))
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    }
}