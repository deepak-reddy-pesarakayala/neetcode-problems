/**
 * MountainArray interface:
 *
 * MountainArray.get(index)
 * MountainArray.length()
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
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
        const leftResult = this.binarySearch(
            mountainArr,
            target,
            0,
            peak,
            true
        );
        if (leftResult !== -1) {
            return leftResult;
        }
        return this.binarySearch(
            mountainArr,
            target,
            peak + 1,
            n - 1,
            false
        );
    }

    binarySearch(mountainArr, target, left, right, increasing) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = mountainArr.get(mid);

            if (value === target) {
                return mid;
            }

            if (increasing) {
                if (value < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if (value < target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}