class Solution {
    fullBloomFlowers(flowers, people) {
        const starts = [];
        const ends = [];

        for (const [start, end] of flowers) {
            starts.push(start);
            ends.push(end);
        }

        starts.sort((a, b) => a - b);
        ends.sort((a, b) => a - b);

        const ans = [];

        for (const p of people) {
            const started = this.upperBound(starts, p);
            const ended = this.lowerBound(ends, p);

            ans.push(started - ended);
        }

        return ans;
    }

    upperBound(arr, target) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    lowerBound(arr, target) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}