class Solution {
    countPrefixSuffixPairs(words) {
        class TrieNode {
            constructor() {
                this.children = new Map();
                this.count = 0;
            }
        }

        const root = new TrieNode();
        let ans = 0;

        for (const word of words) {
            let node = root;

            for (let i = 0; i < word.length; i++) {
                const key = word[i] + word[word.length - 1 - i];

                if (!node.children.has(key)) {
                    node.children.set(key, new TrieNode());
                }

                node = node.children.get(key);
                ans += node.count;
            }

            node.count++;
        }

        return ans;
    }
}