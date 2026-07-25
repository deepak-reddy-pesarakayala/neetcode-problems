class Solution {
    /**
     * @param {number[]} startTime
     * @param {number[]} endTime
     * @param {number[]} profit
     * @return {number}
     */
    jobScheduling(startTime, endTime, profit) {
        const n = startTime.length;
        const jobs = new Array(n);
        for (let i = 0; i < n; i++) {
            jobs[i] = { start: startTime[i], end: endTime[i], profit: profit[i] };
        }
        jobs.sort((a, b) => a.end - b.end);
        const dp = [[0, 0]];
        function binarySearch(targetStart) {
            let left = 0, right = dp.length - 1;
            let lastValidIdx = 0;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (dp[mid][0] <= targetStart) {
                    lastValidIdx = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return dp[lastValidIdx][1];
        }
        for (const job of jobs) {
            const prevProfit = binarySearch(job.start);
            const currentTotal = prevProfit + job.profit;
            const maxProfitSoFar = dp[dp.length - 1][1];
            if (currentTotal > maxProfitSoFar) {
                dp.push([job.end, currentTotal]);
            }
        }
        return dp[dp.length - 1][1];
    }
}