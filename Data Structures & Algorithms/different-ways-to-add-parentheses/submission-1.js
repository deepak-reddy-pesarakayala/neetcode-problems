class Solution {
    diffWaysToCompute(expression) {
        const memo = new Map();

        const solve = (exp) => {
            if (memo.has(exp)) {
                return memo.get(exp);
            }

            const result = [];

            for (let i = 0; i < exp.length; i++) {
                const ch = exp[i];

                if (ch === '+' || ch === '-' || ch === '*') {
                    const left = solve(exp.substring(0, i));
                    const right = solve(exp.substring(i + 1));

                    for (const a of left) {
                        for (const b of right) {
                            if (ch === '+') {
                                result.push(a + b);
                            } else if (ch === '-') {
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