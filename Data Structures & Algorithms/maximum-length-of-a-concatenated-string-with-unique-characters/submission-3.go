func maxLength(arr []string) int {
	masks := make([]int, 0)
	for _, s := range arr {
		mask := 0
		valid := true
		for _, ch := range s {
			bit := 1 << (ch - 'a')
			if mask&bit != 0 {
				valid = false
				break
			}
			mask |= bit
		}
		if valid {
			masks = append(masks, mask)
		}
	}
	return backtrack(masks, 0, 0)
}

func backtrack(masks []int, index int, used int) int {
	maxLen := 0
	for i := index; i < len(masks); i++ {
		if used&masks[i] == 0 {
			length := countBits(masks[i])
			result := length + backtrack(masks, i+1, used|masks[i])
			if result > maxLen {
				maxLen = result
			}
		}
	}
	return maxLen
}

func countBits(mask int) int {
	count := 0
	for mask > 0 {
		count += mask & 1
		mask >>= 1
	}
	return count
}