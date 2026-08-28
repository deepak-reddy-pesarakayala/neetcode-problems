class Solution {
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";

        const tMap = new Map<string, number>();
        for (const char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        const windowMap = new Map<string, number>();
        let have = 0;
        const need = tMap.size;

        let resLen = Infinity;
        let resStart = -1;

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            windowMap.set(char, (windowMap.get(char) || 0) + 1);

            if (tMap.has(char) && windowMap.get(char) === tMap.get(char)) {
                have++;
            }
            while (have === need) {
                if (right - left + 1 < resLen) {
                    resLen = right - left + 1;
                    resStart = left;
                }
                const leftChar = s[left];
                windowMap.set(leftChar, windowMap.get(leftChar)! - 1);

                if (tMap.has(leftChar) && windowMap.get(leftChar)! < tMap.get(leftChar)!) {
                    have--;
                }

                left++;
            }
        }

        return resStart === -1 ? "" : s.substring(resStart, resStart + resLen);
    }
}