func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}
	mapping := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
	result := []string{}
	var backtrack func(int, string)
	backtrack = func(index int, current string) {
		if index == len(digits) {
			result = append(result, current)
			return
		}
		letters := mapping[digits[index]-'0']
		for i := 0; i < len(letters); i++ {
			backtrack(index+1, current+string(letters[i]))
		}
	}
	backtrack(0, "")
	return result
}