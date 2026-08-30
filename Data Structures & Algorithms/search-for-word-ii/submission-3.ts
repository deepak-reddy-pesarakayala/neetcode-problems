class TrieNode {
    children: TrieNode[];
    word: string | null;

    constructor() {
        this.children = new Array(26).fill(null);
        this.word = null;
    }
}

class Solution {
    findWords(board: string[][], words: string[]): string[] {
        const root = new TrieNode();
        const result: string[] = [];

        for (const word of words) {
            let node = root;

            for (const char of word) {
                const index = char.charCodeAt(0) - 97;

                if (node.children[index] === null) {
                    node.children[index] = new TrieNode();
                }

                node = node.children[index];
            }

            node.word = word;
        }

        const rows = board.length;
        const cols = board[0].length;

        const dfs = (
            row: number,
            col: number,
            node: TrieNode
        ): void => {
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            const char = board[row][col];

            if (char === "#") {
                return;
            }

            const index = char.charCodeAt(0) - 97;
            const next = node.children[index];

            if (next === null) {
                return;
            }

            if (next.word !== null) {
                result.push(next.word);
                next.word = null;
            }

            board[row][col] = "#";

            dfs(row + 1, col, next);
            dfs(row - 1, col, next);
            dfs(row, col + 1, next);
            dfs(row, col - 1, next);

            board[row][col] = char;
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, root);
            }
        }

        return result;
    }
}

