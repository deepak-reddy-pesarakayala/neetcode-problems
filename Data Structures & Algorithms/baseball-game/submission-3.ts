class Solution {
    calPoints(operations: string[]): number {
        const stack: number[] = [];
        for (const op of operations) {
            if (op === "C") {
                stack.pop();
            } else if (op === "D") {
                stack.push(stack[stack.length - 1] * 2);
            } else if (op === "+") {
                const n = stack.length;
                stack.push(stack[n - 1] + stack[n - 2]);
            } else {
                stack.push(Number(op));
            }
        }
        return stack.reduce((sum, score) => sum + score, 0);
    }
}