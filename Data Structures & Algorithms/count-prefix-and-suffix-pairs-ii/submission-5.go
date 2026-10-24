func countPrefixSuffixPairs(words []string) int64 {
	type Node struct {
		next map[int]int
		count int64
	}
	nodes := []Node{{next: make(map[int]int)}}
	edges := make(map[uint64]int)
	var ans int64
	for _, word := range words {
		node := 0
		n := len(word)
		for i := 0; i < n; i++ {
			pair := int(word[i]-'a')*26 + int(word[n-1-i]-'a')
			key := uint64(node)*676 + uint64(pair)
			child, ok := edges[key]
			if !ok {
				child = len(nodes)
				edges[key] = child
				nodes = append(nodes, Node{next: make(map[int]int)})
			}
			node = child
			ans += nodes[node].count
		}
		nodes[node].count++
	}
	return ans
}