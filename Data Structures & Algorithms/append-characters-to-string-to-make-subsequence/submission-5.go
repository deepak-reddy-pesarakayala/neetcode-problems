func appendCharacters(s string, t string) int {
	i := 0
    for j := 0; j < len(s) && i < len(t); j++ {
		if s[j] == t[i] {
			i++
		}
	}
    return len(t) - i
}
