func maxNumberOfBalloons(text string) int {
	freq := make([]int, 26)

	for i := 0; i < len(text); i++ {
		freq[text[i]-'a']++
	}

	b := freq['b'-'a']
	a := freq['a'-'a']
	l := freq['l'-'a'] / 2
	o := freq['o'-'a'] / 2
	n := freq['n'-'a']

	result := b

	if a < result {
		result = a
	}
	if l < result {
		result = l
	}
	if o < result {
		result = o
	}
	if n < result {
		result = n
	}

	return result
}
