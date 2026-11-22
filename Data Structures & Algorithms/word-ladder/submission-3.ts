class Solution {
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        const words = new Set(wordList);

        if (!words.has(endWord)) return 0;

        const queue: [string, number][] = [[beginWord, 1]];
        const visited = new Set<string>([beginWord]);

        let head = 0;

        while (head < queue.length) {
            const [word, steps] = queue[head++];

            if (word === endWord) return steps;

            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    const char = String.fromCharCode(c);

                    if (char === word[i]) continue;

                    const next = word.substring(0, i) + char + word.substring(i + 1);

                    if (words.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push([next, steps + 1]);
                    }
                }
            }
        }

        return 0;
    }
}