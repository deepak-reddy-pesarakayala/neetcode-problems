class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
        this.count = n;
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
        if (pa === pb) return false;
        if (this.rank[pa] < this.rank[pb]) {
            [pa, pb] = [pb, pa];
        }
        this.parent[pb] = pa;
        if (this.rank[pa] === this.rank[pb]) {
            this.rank[pa]++;
        }
        this.count--;
        return true;
    }
}
class Solution {
    findCriticalAndPseudoCriticalEdges(n, edges) {
        const indexedEdges = edges.map((e, i) => [
            e[0],
            e[1],
            e[2],
            i
        ]);
        indexedEdges.sort((a, b) => a[2] - b[2]);
        const kruskal = (skipEdge, forceEdge) => {
            const uf = new UnionFind(n);
            let weight = 0;
            if (forceEdge !== -1) {
                const [u, v, w] = indexedEdges[forceEdge];
                uf.union(u, v);
                weight += w;
            }
            for (let i = 0; i < indexedEdges.length; i++) {
                if (i === skipEdge) continue;
                const [u, v, w] = indexedEdges[i];
                if (uf.union(u, v)) {
                    weight += w;
                }
            }
            return uf.count === 1 ? weight : Infinity;
        };
        const baseWeight = kruskal(-1, -1);
        const critical = [];
        const pseudo = [];
        for (let i = 0; i < indexedEdges.length; i++) {
            if (kruskal(i, -1) > baseWeight) {
                critical.push(indexedEdges[i][3]);
                continue;
            }
            if (kruskal(-1, i) === baseWeight) {
                pseudo.push(indexedEdges[i][3]);
            }
        }
        return [critical, pseudo];
    }
}