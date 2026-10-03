class Solution {
    removeDuplicates(s: string, k: number): string {
        const stack: [string, number][] = [];
        for (const ch of s) {
            if (stack.length > 0 && stack[stack.length - 1][0] === ch) {
                stack[stack.length - 1][1]++;
                if (stack[stack.length - 1][1] === k) {
                    stack.pop();
                }
            } else {
                stack.push([ch, 1]);
            }
        }
        let result = "";
        for (const [ch, count] of stack) {
            result += ch.repeat(count);
        }
        return result;
    }
}