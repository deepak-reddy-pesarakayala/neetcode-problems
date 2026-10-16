func allPossibleFBT(n int) []*TreeNode {
	if n%2 == 0 {
		return []*TreeNode{}
	}

	memo := make(map[int][]*TreeNode)

	var build func(int) []*TreeNode
	build = func(nodes int) []*TreeNode {
		if nodes == 1 {
			return []*TreeNode{{Val: 0}}
		}

		if trees, ok := memo[nodes]; ok {
			return trees
		}

		result := []*TreeNode{}

		for leftCount := 1; leftCount < nodes; leftCount += 2 {
			rightCount := nodes - 1 - leftCount

			leftTrees := build(leftCount)
			rightTrees := build(rightCount)

			for _, left := range leftTrees {
				for _, right := range rightTrees {
					root := &TreeNode{Val: 0, Left: left, Right: right}
					result = append(result, root)
				}
			}
		}

		memo[nodes] = result
		return result
	}

	return build(n)
}
