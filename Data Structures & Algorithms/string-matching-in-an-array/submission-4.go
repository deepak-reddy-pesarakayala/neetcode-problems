func stringMatching(words []string) []string {
	result := []string{}
    for i := 0; i < len(words); i++ {
		for j := 0; j < len(words); j++ {
			if i != j && contains(words[j], words[i]) {
				result = append(result, words[i])
				break
			}
		}
	}
    return result
}
func contains(s string, target string) bool {
	if len(target) > len(s) {
		return false
	}
    for i := 0; i <= len(s)-len(target); i++ {
		if s[i:i+len(target)] == target {
			return true
		}
	}
    return false
}