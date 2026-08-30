class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;
    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}
class PrefixTree {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string): void {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        current.isEnd = true;
    }
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEnd;
    }
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }
    private findNode(word: string): TrieNode | null {
        let current = this.root;
        for (const char of word) {
            if (!current.children.has(char)) {
                return null;
            }
            current = current.children.get(char)!;
        }
        return current;
    }
}

