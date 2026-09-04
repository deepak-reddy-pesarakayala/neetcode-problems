func cloneGraph(node *Node) *Node {
	if node == nil {
		return nil
	}

	clones := make(map[*Node]*Node)

	var dfs func(*Node) *Node

	dfs = func(current *Node) *Node {
		if clone, exists := clones[current]; exists {
			return clone
		}

		copy := &Node{
			Val:       current.Val,
			Neighbors: []*Node{},
		}

		clones[current] = copy

		for _, neighbor := range current.Neighbors {
			copy.Neighbors = append(copy.Neighbors, dfs(neighbor))
		}

		return copy
	}

	return dfs(node)
}
