func numTilePossibilities(tiles string) int {
	count := [26]int{}
	for _, ch := range tiles {
		count[ch-'A']++
	}
	var backtrack func() int
	backtrack = func() int {
		total := 0
		for i := 0; i < 26; i++ {
			if count[i] == 0 {
				continue
			}
			total++
			count[i]--
			total += backtrack()
			count[i]++
		}
		return total
	}
	return backtrack()
}