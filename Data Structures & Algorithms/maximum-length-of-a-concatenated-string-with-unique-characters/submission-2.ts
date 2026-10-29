class Solution {
    maxLength(arr) {
        const valid = [];

        for (const s of arr) {
            const set = new Set(s);

            if (set.size === s.length) {
                valid.push(s);
            }
        }

        let maxLen = 0;

        const backtrack = (index, used, length) => {
            maxLen = Math.max(maxLen, length);

            for (let i = index; i < valid.length; i++) {
                let canUse = true;

                for (const ch of valid[i]) {
                    if (used.has(ch)) {
                        canUse = false;
                        break;
                    }
                }

                if (canUse) {
                    for (const ch of valid[i]) {
                        used.add(ch);
                    }

                    backtrack(i + 1, used, length + valid[i].length);

                    for (const ch of valid[i]) {
                        used.delete(ch);
                    }
                }
            }
        };

        backtrack(0, new Set(), 0);
        return maxLen;
    }
}