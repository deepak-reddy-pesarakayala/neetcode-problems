
class Solution {
    accountsMerge(accounts: string[][]): string[][] {
        const parent = Array.from({ length: accounts.length }, (_, i) => i);
        const size = new Array(accounts.length).fill(1);

        const find = (x: number): number => {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };

        const union = (a: number, b: number): void => {
            let rootA = find(a);
            let rootB = find(b);

            if (rootA === rootB) return;

            if (size[rootA] < size[rootB]) {
                [rootA, rootB] = [rootB, rootA];
            }

            parent[rootB] = rootA;
            size[rootA] += size[rootB];
        };

        const emailToAccount = new Map<string, number>();

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                const email = accounts[i][j];

                if (emailToAccount.has(email)) {
                    union(i, emailToAccount.get(email)!);
                } else {
                    emailToAccount.set(email, i);
                }
            }
        }

        const merged = new Map<number, string[]>();

        for (const [email, account] of emailToAccount) {
            const root = find(account);

            if (!merged.has(root)) {
                merged.set(root, []);
            }

            merged.get(root)!.push(email);
        }

        const result: string[][] = [];

        for (const [root, emails] of merged) {
            emails.sort();
            result.push([accounts[root][0], ...emails]);
        }

        return result;
    }
}
