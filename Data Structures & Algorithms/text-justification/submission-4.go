func fullJustify(words []string, maxWidth int) []string {
	result := []string{}
	n := len(words)
	i := 0

	for i < n {
		j := i
		wordLength := 0

		for j < n {
			if wordLength+len(words[j])+(j-i) > maxWidth {
				break
			}
			wordLength += len(words[j])
			j++
		}

		count := j - i
		totalSpaces := maxWidth - wordLength
		line := ""

		if j == n || count == 1 {
			for k := i; k < j; k++ {
				if k > i {
					line += " "
				}
				line += words[k]
			}

			for len(line) < maxWidth {
				line += " "
			}
		} else {
			gaps := count - 1
			space := totalSpaces / gaps
			extra := totalSpaces % gaps

			for k := i; k < j; k++ {
				line += words[k]

				if k < j-1 {
					spaces := space

					if k-i < extra {
						spaces++
					}

					for x := 0; x < spaces; x++ {
						line += " "
					}
				}
			}
		}

		result = append(result, line)
		i = j
	}

	return result
}
