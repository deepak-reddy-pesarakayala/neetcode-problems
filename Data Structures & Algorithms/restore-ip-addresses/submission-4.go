func restoreIpAddresses(s string) []string {
	result := []string{}
	parts := []string{}
	var backtrack func(int)
	backtrack = func(start int) {
		if len(parts) == 4 {
			if start == len(s) {
				result = append(result, parts[0]+"."+parts[1]+"."+parts[2]+"."+parts[3])
			}
			return
		}
		for length := 1; length <= 3 && start+length <= len(s); length++ {
			part := s[start : start+length]
			if length > 1 && part[0] == '0' {
				break
			}
			if len(part) == 3 && part > "255" {
				continue
			}
			remaining := len(s) - start - length
			remainingParts := 3 - len(parts)
			if remaining < remainingParts || remaining > remainingParts*3 {
				continue
			}
			parts = append(parts, part)
			backtrack(start + length)
			parts = parts[:len(parts)-1]
		}
	}
	backtrack(0)
	return result
}