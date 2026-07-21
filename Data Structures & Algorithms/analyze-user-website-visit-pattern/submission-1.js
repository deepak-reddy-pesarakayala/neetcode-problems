class Solution {
    /**
     * @param {string[]} username
     * @param {number[]} timestamp
     * @param {string[]} website
     * @return {string[]}
     */
    mostVisitedPattern(username, timestamp, website) {
        const visits = [];
        for (let i = 0; i < username.length; i++) {
            visits.push([timestamp[i], username[i], website[i]]);
        }
        visits.sort((a, b) => a[0] - b[0]);
        const userVisits = new Map();
        for (const [, user, site] of visits) {
            if (!userVisits.has(user)) {
                userVisits.set(user, []);
            }
            userVisits.get(user).push(site);
        }
        const patternCount = new Map();
        for (const [, sites] of userVisits) {
            const seen = new Set();
            for (let i = 0; i < sites.length - 2; i++) {
                for (let j = i + 1; j < sites.length - 1; j++) {
                    for (let k = j + 1; k < sites.length; k++) {
                        const pattern = `${sites[i]},${sites[j]},${sites[k]}`;
                        if (!seen.has(pattern)) {
                            seen.add(pattern);
                            patternCount.set(
                                pattern,
                                (patternCount.get(pattern) || 0) + 1
                            );
                        }
                    }
                }
            }
        }
        let bestPattern = "";
        let bestCount = 0;
        for (const [pattern, count] of patternCount) {
            if (
                count > bestCount ||
                (count === bestCount &&
                    (bestPattern === "" || pattern < bestPattern))
            ) {
                bestCount = count;
                bestPattern = pattern;
            }
        }
        return bestPattern.split(",");
    }
}