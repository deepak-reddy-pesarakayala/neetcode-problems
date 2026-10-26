class Solution {
    restoreIpAddresses(s: string): string[] {
        const result: string[] = [];
        const parts: string[] = [];

        const backtrack = (start: number): void => {
            if (parts.length === 4) {
                if (start === s.length) {
                    result.push(parts.join("."));
                }
                return;
            }

            for (let len = 1; len <= 3; len++) {
                if (start + len > s.length) {
                    break;
                }

                const part = s.substring(start, start + len);

                if (part.length > 1 && part[0] === "0") {
                    break;
                }

                if (Number(part) > 255) {
                    break;
                }

                parts.push(part);
                backtrack(start + len);
                parts.pop();
            }
        };

        backtrack(0);
        return result;
    }
}