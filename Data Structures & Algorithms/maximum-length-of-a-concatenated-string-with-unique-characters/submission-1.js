class Solution {
    maxLength(arr) {
        const masks = [];
        for (const s of arr) {
            let mask = 0;
            let valid = true;
            for (const ch of s) {
                const bit = 1 << (ch.charCodeAt(0) - 97);
                if (mask & bit) {
                    valid = false;
                    break;
                }
                mask |= bit;
            }
            if (valid) masks.push([mask, s.length]);
        }

        let max = 0;

        const backtrack = (index, mask, length) => {
            max = Math.max(max, length);

            for (let i = index; i < masks.length; i++) {
                const [nextMask, size] = masks[i];

                if ((mask & nextMask) === 0) {
                    backtrack(i + 1, mask | nextMask, length + size);
                }
            }
        };

        backtrack(0, 0, 0);
        return max;
    }
}

