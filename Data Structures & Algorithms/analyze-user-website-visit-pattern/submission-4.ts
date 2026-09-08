class Solution {
    mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
        const visits: [number, string, string][] = [];
        for (let i = 0; i < username.length; i++) {
            visits.push([timestamp[i], username[i], website[i]]);
        }
        visits.sort((a, b) => a[0] - b[0]);
        const users = new Map<string, string[]>();
        for (const [, user, site] of visits) {
            if (!users.has(user)) users.set(user, []);
            users.get(user)!.push(site);
        }
        const count = new Map<string, number>();
        for (const sites of users.values()) {
            const seen = new Set<string>();
            for (let i = 0; i < sites.length - 2; i++) {
                for (let j = i + 1; j < sites.length - 1; j++) {
                    for (let k = j + 1; k < sites.length; k++) {
                        const pattern = [sites[i], sites[j], sites[k]];
                        const key = pattern.join("\u0000");
                        seen.add(key);
                    }
                }
            }
            for (const key of seen) {
                count.set(key, (count.get(key) || 0) + 1);
            }
        }
        let best: string[] = [];
        let maxScore = 0;
        for (const [key, score] of count) {
            const pattern = key.split("\u0000");
            if (score > maxScore || (score === maxScore && this.isSmaller(pattern, best))) {
                maxScore = score;
                best = pattern;
            }
        }
        return best;
    }
    isSmaller(a: string[], b: string[]): boolean {
        if (b.length === 0) return true;
        for (let i = 0; i < 3; i++) {
            if (a[i] < b[i]) return true;
            if (a[i] > b[i]) return false;
        }
        return false;
    }
}