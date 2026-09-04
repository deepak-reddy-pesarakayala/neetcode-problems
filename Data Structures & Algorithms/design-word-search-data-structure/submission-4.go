type TrieNode struct {
	children [26]*TrieNode
	isEnd    bool
}

type WordDictionary struct {
	root *TrieNode
}

func Constructor() WordDictionary {
	return WordDictionary{
		root: &TrieNode{},
	}
}

func (this *WordDictionary) AddWord(word string) {
	current := this.root

	for i := 0; i < len(word); i++ {
		index := word[i] - 'a'

		if current.children[index] == nil {
			current.children[index] = &TrieNode{}
		}

		current = current.children[index]
	}

	current.isEnd = true
}

func (this *WordDictionary) Search(word string) bool {
	var dfs func(*TrieNode, int) bool

	dfs = func(node *TrieNode, index int) bool {
		if index == len(word) {
			return node.isEnd
		}

		ch := word[index]

		if ch == '.' {
			for i := 0; i < 26; i++ {
				if node.children[i] != nil && dfs(node.children[i], index+1) {
					return true
				}
			}
			return false
		}

		child := node.children[ch-'a']

		if child == nil {
			return false
		}

		return dfs(child, index+1)
	}

	return dfs(this.root, 0)
}
