func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
    sToT := make(map[byte]byte)
	tToS := make(map[byte]byte)
    for i := 0; i < len(s); i++ {
		a := s[i]
		b := t[i]
        if mapped, exists := sToT[a]; exists {
			if mapped != b {
				return false
			}
		}
        if mapped, exists := tToS[b]; exists {
			if mapped != a {
				return false
			}
		}

		sToT[a] = b
		tToS[b] = a
	}

	return true
}