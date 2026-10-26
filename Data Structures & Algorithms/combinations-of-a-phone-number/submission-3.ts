class Solution {
    letterCombinations(digits: string): string[] {
        if (digits.length === 0) {
            return [];
        }

        const map: string[] = [
            "", "", "abc", "def", "ghi", "jkl",
            "mno", "pqrs", "tuv", "wxyz"
        ];

        const result: string[] = [];

        const backtrack = (index: number, current: string): void => {
            if (index === digits.length) {
                result.push(current);
                return;
            }

            const letters = map[Number(digits[index])];

            for (const ch of letters) {
                backtrack(index + 1, current + ch);
            }
        };

        backtrack(0, "");
        return result;
    }
}