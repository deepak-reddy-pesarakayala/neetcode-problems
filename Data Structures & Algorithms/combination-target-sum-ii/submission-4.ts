class Solution {
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);

        const result: number[][] = [];
        const current: number[] = [];

        const backtrack = (start: number, remaining: number): void => {
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                if (candidates[i] > remaining) {
                    break;
                }

                current.push(candidates[i]);
                backtrack(i + 1, remaining - candidates[i]);
                current.pop();
            }
        };

        backtrack(0, target);
        return result;
    }
}