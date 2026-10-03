class Solution {
    decodeString(s: string): string {
        const countStack: number[] = [];
        const stringStack: string[] = [];
        let current = "";
        let number = 0;
        for (const ch of s) {
            if (ch >= "0" && ch <= "9") {
                number = number * 10 + Number(ch);
            } else if (ch === "[") {
                countStack.push(number);
                stringStack.push(current);
                number = 0;
                current = "";
            } else if (ch === "]") {
                const count = countStack.pop()!;
                const previous = stringStack.pop()!;
                current = previous + current.repeat(count);
            } else {
                current += ch;
            }
        }
        return current;
    }
}