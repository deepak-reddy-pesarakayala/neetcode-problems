type Codec struct{}
func Constructor() Codec {
	return Codec{}
}
func (this *Codec) serialize(root *TreeNode) string {
	result := []string{}
    var dfs func(*TreeNode)
	dfs = func(node *TreeNode) {
		if node == nil {
			result = append(result, "N")
			return
		}
		result = append(result, strconv.Itoa(node.Val))
		dfs(node.Left)
		dfs(node.Right)
	}
    dfs(root)
	return strings.Join(result, ",")
}
func (this *Codec) deserialize(data string) *TreeNode {
	values := strings.Split(data, ",")
	index := 0
    var dfs func() *TreeNode
	dfs = func() *TreeNode {
		if index >= len(values) || values[index] == "N" {
			index++
			return nil
		}
        val, _ := strconv.Atoi(values[index])
		index++
        node := &TreeNode{Val: val}
		node.Left = dfs()
		node.Right = dfs()
        return node
	}
    return dfs()
}
