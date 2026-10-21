func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
    deleted := make(map[int]bool)
    for _, val := range to_delete {
        deleted[val] = true
    }
    result := []*TreeNode{}
    var dfs func(*TreeNode, bool) *TreeNode
    dfs = func(node *TreeNode, isRoot bool) *TreeNode {
        if node == nil {
            return nil
        }
        isDeleted := deleted[node.Val]
        if isRoot && !isDeleted {
            result = append(result, node)
        }
        node.Left = dfs(node.Left, isDeleted)
        node.Right = dfs(node.Right, isDeleted)
        if isDeleted {
            return nil
        }
        return node
    }
    dfs(root, true)
    return result
}