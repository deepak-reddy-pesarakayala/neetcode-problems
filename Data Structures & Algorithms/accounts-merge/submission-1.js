class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(1);
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px === py) return;
        if (this.rank[px] < this.rank[py]) {
            [px, py] = [py, px];
        }
        this.parent[py] = px;
        if (this.rank[px] === this.rank[py]) {
            this.rank[px]++;
        }
    }
}
class Solution {
    accountsMerge(accounts) {
        const n = accounts.length;
        const uf = new UnionFind(n);
        const emailToAccount = new Map();
        for (let i = 0; i < n; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];
                if (emailToAccount.has(email)) {
                    uf.union(i, emailToAccount.get(email));
                } else {
                    emailToAccount.set(email, i);
                }
            }
        }
        const groups = new Map();
        for (const [email, acc] of emailToAccount) {
            const root = uf.find(acc);
            if (!groups.has(root)) {
                groups.set(root, []);
            }
            groups.get(root).push(email);
        }
        const result = [];
        for (const [root, emails] of groups) {
            emails.sort();
            result.push([
                accounts[root][0],
                ...emails
            ]);
        }
        return result;
    }
}