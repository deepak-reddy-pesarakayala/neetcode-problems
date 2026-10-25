class Solution {
    combine(n: number, k: number): number[][] {
        const result: number[][] = [];
        const current: number[] = [];

        const backtrack = (start: number): void => {
            if (current.length === k) {
                result.push([...current]);
                return;
            }

            for (let i = start; i <= n - (k - current.length) + 1; i++) {
                current.push(i);
                backtrack(i + 1);
                current.pop();
            }
        };

        backtrack(1);
        return result;
    }
}