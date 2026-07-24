class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(a, b) {
        let pa = this.find(a);
        let pb = this.find(b);
        if (pa === pb) return;
        if (this.rank[pa] < this.rank[pb]) {
            this.parent[pa] = pb;
        } else if (this.rank[pa] > this.rank[pb]) {
            this.parent[pb] = pa;
        } else {
            this.parent[pb] = pa;
            this.rank[pa]++;
        }
    }
}
class Solution {
    canTraverseAllPairs(nums) {
        const n = nums.length;
        if (n === 1) return true;
        for (const num of nums) {
            if (num === 1) return false;
        }
        const dsu = new DSU(n);
        const primeOwner = new Map();
        const getPrimeFactors = (x) => {
            const factors = [];
            let d = 2;
            while (d * d <= x) {
                if (x % d === 0) {
                    factors.push(d);
                    while (x % d === 0) x /= d;
                }
                d++;
            }
            if (x > 1) factors.push(x);
            return factors;
        };
        for (let i = 0; i < n; i++) {
            const factors = getPrimeFactors(nums[i]);
            for (const p of factors) {
                if (primeOwner.has(p)) {
                    dsu.union(i, primeOwner.get(p));
                } else {
                    primeOwner.set(p, i);
                }
            }
        }
        const root = dsu.find(0);
        for (let i = 1; i < n; i++) {
            if (dsu.find(i) !== root) {
                return false;
            }
        }
        return true;
    }
}