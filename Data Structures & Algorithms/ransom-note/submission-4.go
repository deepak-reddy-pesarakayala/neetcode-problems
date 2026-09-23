func canConstruct(ransomNote string, magazine string) bool {
	freq := make([]int, 26)

	for i := 0; i < len(magazine); i++ {
		freq[int(magazine[i]-'a')]++
	}

	for i := 0; i < len(ransomNote); i++ {
		index := int(ransomNote[i] - 'a')
		freq[index]--

		if freq[index] < 0 {
			return false
		}
	}

	return true
}
