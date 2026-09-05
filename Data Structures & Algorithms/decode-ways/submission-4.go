func numDecodings(s string) int {
	n := len(s)
    if n == 0 || s[0] == '0' {
		return 0
	}
    prev2 := 1
	prev1 := 1
    for i := 1; i < n; i++ {
		current := 0
        if s[i] != '0' {
			current += prev1
		}
        twoDigit := int(s[i-1]-'0')*10 + int(s[i]-'0')
        if twoDigit >= 10 && twoDigit <= 26 {
			current += prev2
		}
        prev2 = prev1
		prev1 = current
	}
    return prev1
}
