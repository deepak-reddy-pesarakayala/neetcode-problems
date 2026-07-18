class Solution {
    mergeTriplets(triplets, target) {
        let matchA = false;
        let matchB = false;
        let matchC = false;
        for (const [a, b, c] of triplets) {
            if (a > target[0] || b > target[1] || c > target[2]) {
                continue;
            }
            if (a === target[0]) matchA = true;
            if (b === target[1]) matchB = true;
            if (c === target[2]) matchC = true;
        }
        return matchA && matchB && matchC;
    }
}