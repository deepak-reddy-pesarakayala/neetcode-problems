class Solution {
    diffWaysToCompute(expression: string): number[] {
        const memo = new Map<string, number[]>();

        const solve = (exp: string): number[] => {
            if (memo.has(exp)) {
                return memo.get(exp)!;
            }

            const result: number[] = [];

            for (let i = 0; i < exp.length; i++) {
                const ch = exp[i];

                if (ch === "+" || ch === "-" || ch === "*") {
                    const left = solve(exp.substring(0, i));
                    const right = solve(exp.substring(i + 1));

                    for (const a of left) {
                        for (const b of right) {
                            if (ch === "+") {
                                result.push(a + b);
                            } else if (ch === "-") {
                                result.push(a - b);
                            } else {
                                result.push(a * b);
                            }
                        }
                    }
                }
            }

            if (result.length === 0) {
                result.push(Number(exp));
            }

            memo.set(exp, result);
            return result;
        };

        return solve(expression);
    }
}