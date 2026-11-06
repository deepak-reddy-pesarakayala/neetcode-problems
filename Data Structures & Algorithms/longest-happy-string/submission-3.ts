class Solution {
    longestDiverseString(a: number, b: number, c: number): string {
        let result = "";
        const freq: [string, number][] = [
            ["a", a],
            ["b", b],
            ["c", c]
        ];

        while (true) {
            freq.sort((x, y) => y[1] - x[1]);

            let added = false;

            for (let i = 0; i < 3; i++) {
                const [ch, count] = freq[i];

                if (count === 0) continue;

                const n = result.length;

                if (n >= 2 && result[n - 1] === ch && result[n - 2] === ch) {
                    continue;
                }

                result += ch;
                freq[i][1]--;
                added = true;
                break;
            }

            if (!added) break;
        }

        return result;
    }
}