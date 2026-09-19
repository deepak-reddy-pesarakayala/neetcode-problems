func kthDistinct(arr []string, k int) string {
	frequency := make(map[string]int)

	for _, word := range arr {
		frequency[word]++
	}

	count := 0

	for _, word := range arr {
		if frequency[word] == 1 {
			count++

			if count == k {
				return word
			}
		}
	}

	return ""
}