type TrieNode struct {
	children [26]*TrieNode
	word     string
}

type Trie struct {
	root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{
		root: &TrieNode{},
	}
}

func (t *Trie) Insert(word string) {
	current := t.root

	for i := 0; i < len(word); i++ {
		index := word[i] - 'a'

		if current.children[index] == nil {
			current.children[index] = &TrieNode{}
		}

		current = current.children[index]
	}

	current.word = word
}

func findWords(board [][]byte, words []string) []string {
	trie := NewTrie()

	for _, word := range words {
		trie.Insert(word)
	}

	rows := len(board)
	cols := len(board[0])
	result := []string{}

	var dfs func(int, int, *TrieNode)

	dfs = func(row, col int, node *TrieNode) {
		if row < 0 || row >= rows || col < 0 || col >= cols {
			return
		}

		if board[row][col] == '#' {
			return
		}

		index := board[row][col] - 'a'
		next := node.children[index]

		if next == nil {
			return
		}

		if next.word != "" {
			result = append(result, next.word)
			next.word = ""
		}

		ch := board[row][col]
		board[row][col] = '#'

		dfs(row+1, col, next)
		dfs(row-1, col, next)
		dfs(row, col+1, next)
		dfs(row, col-1, next)

		board[row][col] = ch
	}

	for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			dfs(row, col, trie.root)
		}
	}

	return result
}
