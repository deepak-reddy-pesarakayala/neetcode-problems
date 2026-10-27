class Solution {
    getHappyString(n: number, k: number): string {
        const result: string[] = [];
        const chars: string[] = ["a", "b", "c"];

        const backtrack = (current: string): void => {
            if (current.length === n) {
                result.push(current);
                return;
            }

            for (const ch of chars) {
                if (current.length === 0 || current[current.length - 1] !== ch) {
                    backtrack(current + ch);
                }
            }
        };

        backtrack("");

        return k <= result.length ? result[k - 1] : "";
    }
}