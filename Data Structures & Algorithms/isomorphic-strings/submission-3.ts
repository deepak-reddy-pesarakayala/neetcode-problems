class Solution {
    isIsomorphic(s: string, t: string): boolean {
        const mapST = new Map<string, string>();
        const mapTS = new Map<string, string>();
        for (let i = 0; i < s.length; i++) {
            const a = s[i];
            const b = t[i];
            if (mapST.has(a) && mapST.get(a) !== b) return false;
            if (mapTS.has(b) && mapTS.get(b) !== a) return false;
            mapST.set(a, b);
            mapTS.set(b, a);
        }
        return true;
    }
}