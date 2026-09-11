class Solution {
    strStr(haystack: string, needle: string): number {
        if (needle.length > haystack.length) return -1;
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            if (haystack.startsWith(needle, i)) return i;
        }
        return -1;
    }
}