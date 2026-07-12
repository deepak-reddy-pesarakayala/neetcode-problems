class Solution {
    restoreIpAddresses(s) {
        const result = [];

        if (s.length < 4 || s.length > 12) {
            return result;
        }

        const backtrack = (start, parts) => {
            if (parts.length === 4) {
                if (start === s.length) {
                    result.push(parts.join("."));
                }
                return;
            }

            const remainingDigits = s.length - start;
            const remainingParts = 4 - parts.length;

            if (
                remainingDigits < remainingParts ||
                remainingDigits > remainingParts * 3
            ) {
                return;
            }

            for (let length = 1; length <= 3 && start + length <= s.length; length++) {
                const part = s.substring(start, start + length);
                if (part.length > 1 && part[0] === "0") {
                    break;
                }

                const value = Number(part);

                if (value > 255) {
                    break;
                }

                parts.push(part);
                backtrack(start + length, parts);
                parts.pop();
            }
        };

        backtrack(0, []);
        return result;
    }
}