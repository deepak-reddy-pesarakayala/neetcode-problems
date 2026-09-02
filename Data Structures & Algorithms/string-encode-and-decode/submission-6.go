type Solution struct{}

func (Solution) Encode(strs []string) string {
	result := ""

	for _, s := range strs {
		result += strconv.Itoa(len(s)) + "#" + s
	}

	return result
}

func (Solution) Decode(s string) []string {
	result := []string{}
	i := 0

	for i < len(s) {
		j := i

		for s[j] != '#' {
			j++
		}

		length := 0
		for k := i; k < j; k++ {
			length = length*10 + int(s[k]-'0')
		}

		j++
		result = append(result, s[j:j+length])
		i = j + length
	}

	return result
}

