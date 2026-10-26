class Solution {
    numTilePossibilities(tiles: string): number {
        const freq: number[] = new Array(26).fill(0);

        for (const ch of tiles) {
            freq[ch.charCodeAt(0) - 65]++;
        }

        const backtrack = (): number => {
            let count = 0;

            for (let i = 0; i < 26; i++) {
                if (freq[i] === 0) {
                    continue;
                }

                count++;
                freq[i]--;
                count += backtrack();
                freq[i]++;
            }

            return count;
        };

        return backtrack();
    }
}