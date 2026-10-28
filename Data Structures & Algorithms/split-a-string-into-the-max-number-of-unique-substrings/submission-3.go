func maxUniqueSplit(s string) int {
	used := make(map[string]bool)
	return backtrack(s, 0, used)
}

func backtrack(s string, start int, used map[string]bool) int {
	if start == len(s) {
		return 0
	}
	maxParts := 0
	for end := start + 1; end <= len(s); end++ {
		sub := s[start:end]
		if !used[sub] {
			used[sub] = true
			parts := 1 + backtrack(s, end, used)
			if parts > maxParts {
				maxParts = parts
			}
			delete(used, sub)
		}
	}
	return maxParts
}