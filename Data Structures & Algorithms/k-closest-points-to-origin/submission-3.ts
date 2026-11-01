class Solution {
    kClosest(points: number[][], k: number): number[][] {
        points.sort((a, b) => {
            const distA = a[0] * a[0] + a[1] * a[1];
            const distB = b[0] * b[0] + b[1] * b[1];

            return distA - distB;
        });

        return points.slice(0, k);
    }
}