func guessNumber(n int) int {
	left := int64(1)
	right := int64(n)

	for left <= right {
		mid := left + (right-left)/2
		result := guess(int(mid))

		if result == 0 {
			return int(mid)
		}

		if result == -1 {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}
