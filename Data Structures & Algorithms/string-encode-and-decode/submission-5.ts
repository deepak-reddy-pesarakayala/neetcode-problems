class Solution {
    encode(strs: string[]): string {
        let encoded = "";
        for (const str of strs) {
            encoded += str.length + "#" + str;
        }
        return encoded;
    }
    decode(s: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < s.length) {
            let j = i;
            while (s[j] !== "#") {
                j++;
            }
            const length = Number(s.substring(i, j));
            j++;
            const str = s.substring(j, j + length);
            result.push(str);
            i = j + length;
        }
        return result;
    }
}

