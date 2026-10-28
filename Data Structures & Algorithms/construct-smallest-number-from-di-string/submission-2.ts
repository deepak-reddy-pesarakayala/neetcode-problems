class Solution {
    smallestNumber(pattern: string): string {
        const stack: number[] = [];
        let result = "";

        for (let i = 0; i <= pattern.length; i++) {
            stack.push(i + 1);

            if (i === pattern.length || pattern[i] === "I") {
                while (stack.length > 0) {
                    result += stack.pop();
                }
            }
        }

        return result;
    }
}