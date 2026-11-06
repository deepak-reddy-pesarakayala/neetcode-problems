class Solution {
    reorganizeString(s: string): string {
        const freq = new Array(26).fill(0);

        for (const ch of s) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        const maxFreq = Math.max(...freq);

        if (maxFreq > Math.ceil(s.length / 2)) {
            return "";
        }

        let result = "";
        let prev = -1;

        for (let i = 0; i < s.length; i++) {
            let best = -1;

            for (let j = 0; j < 26; j++) {
                if (j !== prev && freq[j] > 0) {
                    if (best === -1 || freq[j] > freq[best]) {
                        best = j;
                    }
                }
            }

            if (best === -1) {
                return "";
            }

            result += String.fromCharCode(best + 97);
            freq[best]--;
            prev = best;
        }

        return result;
    }
}