func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)
    child := 0
	cookie := 0
    for child < len(g) && cookie < len(s) {
		if s[cookie] >= g[child] {
			child++
		}
		cookie++
	}
    return child
}