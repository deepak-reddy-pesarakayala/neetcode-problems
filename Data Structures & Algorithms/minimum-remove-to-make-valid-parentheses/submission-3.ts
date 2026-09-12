class Solution {
    minRemoveToMakeValid(s: string): string {
        const stack: number[] = [];
        const remove = new Set<number>();
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                stack.push(i);
            } else if (s[i] === ")") {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    remove.add(i);
                }
            }
        }
        for (const index of stack) {
            remove.add(index);
        }
        let result = "";
        for (let i = 0; i < s.length; i++) {
            if (!remove.has(i)) {
                result += s[i];
            }
        }
        return result;
    }
}