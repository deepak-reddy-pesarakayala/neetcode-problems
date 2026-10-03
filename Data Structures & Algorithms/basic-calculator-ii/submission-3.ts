class Solution {
    calculate(s: string): number {
        const stack: number[] = [];
        let num = 0;
        let sign = "+";
        for (let i = 0; i <= s.length; i++) {
            const ch = i < s.length ? s[i] : "+";
            if (ch >= "0" && ch <= "9") {
                num = num * 10 + Number(ch);
            } else if (ch !== " ") {
                if (sign === "+") stack.push(num);
                else if (sign === "-") stack.push(-num);
                else if (sign === "*") stack.push(stack.pop()! * num);
                else stack.push(Math.trunc(stack.pop()! / num));
                sign = ch;
                num = 0;
            }
        }
        return stack.reduce((sum, value) => sum + value, 0);
    }
}