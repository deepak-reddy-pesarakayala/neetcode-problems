func distributeCoins(root *TreeNode) int {
    moves := 0
    var dfs func(*TreeNode) int
    dfs = func(node *TreeNode) int {
        if node == nil {
            return 0
        }
        left := dfs(node.Left)
        right := dfs(node.Right)
        moves += abs(left) + abs(right)
        return node.Val + left + right - 1
    }
    dfs(root)
    return moves
}
func abs(n int) int {
    if n < 0 {
        return -n
    }
    return n
}