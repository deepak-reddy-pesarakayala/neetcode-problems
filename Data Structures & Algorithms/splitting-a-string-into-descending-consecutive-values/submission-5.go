func splitString(s string) bool {
	n := len(s)
	for i := 1; i < n; i++ {
		if checkSplit(s, i, normalize(s[:i])) {
			return true
		}
	}
	return false
}

func checkSplit(s string, start int, prev string) bool {
	if start == len(s) {
		return true
	}
	if prev == "0" {
		return false
	}
	next := decrement(prev)
	for end := start + 1; end <= len(s); end++ {
		curr := normalize(s[start:end])
		if curr == next && checkSplit(s, end, curr) {
			return true
		}
	}
	return false
}

func normalize(s string) string {
	i := 0
	for i < len(s)-1 && s[i] == '0' {
		i++
	}
	return s[i:]
}

func decrement(s string) string {
	a := []byte(s)
	i := len(a) - 1
	for i >= 0 && a[i] == '0' {
		a[i] = '9'
		i--
	}
	if i >= 0 {
		a[i]--
	}
	return normalize(string(a))
}