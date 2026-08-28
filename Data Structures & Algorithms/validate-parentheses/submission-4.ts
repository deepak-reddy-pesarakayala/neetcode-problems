class Solution {
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;
        const stack: string[] = [];
        const bracketMap: Record<string, string> = {
            '(': ')',
            '{': '}',
            '[': ']'
        };
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (bracketMap[char]) {
                stack.push(bracketMap[char]);
            } else {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}