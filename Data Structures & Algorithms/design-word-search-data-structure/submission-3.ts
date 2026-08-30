class TrieNode {
    children: TrieNode[];
    isEnd: boolean;
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}
class WordDictionary {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    addWord(word: string): void {
        let current = this.root;
        for (const char of word) {
            const index = char.charCodeAt(0) - 97;
            if (current.children[index] === null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        current.isEnd = true;
    }
    search(word: string): boolean {
        return this.dfs(this.root, word, 0);
    }
    private dfs(
        node: TrieNode,
        word: string,
        index: number
    ): boolean {
        if (index === word.length) {
            return node.isEnd;
        }
        const char = word[index];
        if (char === ".") {
            for (let i = 0; i < 26; i++) {
                if (
                    node.children[i] !== null &&
                    this.dfs(node.children[i], word, index + 1)
                ) {
                    return true;
                }
            }
            return false;
        }
        const childIndex = char.charCodeAt(0) - 97;
        if (node.children[childIndex] === null) {
            return false;
        }
        return this.dfs(
            node.children[childIndex],
            word,
            index + 1
        );
    }
}



