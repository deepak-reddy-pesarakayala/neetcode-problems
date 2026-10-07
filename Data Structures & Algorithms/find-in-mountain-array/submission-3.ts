interface MountainArray {
    get(index: number): number;
    length(): number;
}
class Solution {
    findInMountainArray(target: number, mountainArr: MountainArray): number {
        const n = mountainArr.length();
        let left = 0;
        let right = n - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const peak = left;
        left = 0;
        right = peak;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = mountainArr.get(mid);
            if (value === target) return mid;
            if (value < target) left = mid + 1;
            else right = mid - 1;
        }
        left = peak + 1;
        right = n - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = mountainArr.get(mid);
            if (value === target) return mid;
            if (value > target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}