func recoverFromPreorder(traversal string) *TreeNode {
    stack := []*TreeNode{}
    i := 0
    for i < len(traversal) {
        depth := 0
        for i < len(traversal) && traversal[i] == '-' {
            depth++
            i++
        }
        val := 0
        for i < len(traversal) && traversal[i] >= '0' && traversal[i] <= '9' {
            val = val*10 + int(traversal[i]-'0')
            i++
        }
        node := &TreeNode{Val: val}
        for len(stack) > depth {
            stack = stack[:len(stack)-1]
        }
        if len(stack) > 0 {
            parent := stack[len(stack)-1]
            if parent.Left == nil {
                parent.Left = node
            } else {
                parent.Right = node
            }
        }
        stack = append(stack, node)
    }
    return stack[0]
}