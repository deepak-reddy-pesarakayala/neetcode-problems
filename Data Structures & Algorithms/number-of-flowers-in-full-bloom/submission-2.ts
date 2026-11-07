class Solution {
    fullBloomFlowers(flowers: number[][], people: number[]): number[] {
        const starts = flowers.map(flower => flower[0]).sort((a, b) => a - b);
        const ends = flowers.map(flower => flower[1]).sort((a, b) => a - b);

        const upperBound = (arr: number[], target: number): number => {
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
        };

        const lowerBound = (arr: number[], target: number): number => {
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
        };

        return people.map(time => {
            const started = upperBound(starts, time);
            const ended = lowerBound(ends, time);

            return started - ended;
        });
    }
}
