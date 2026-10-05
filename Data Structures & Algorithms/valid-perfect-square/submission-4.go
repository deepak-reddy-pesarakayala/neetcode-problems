func isPerfectSquare(num int) bool {
	left, right := 1, num

	for left <= right {
		mid := left + (right-left)/2
		square := int64(mid) * int64(mid)

		if square == int64(num) {
			return true
		}

		if square < int64(num) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return false
}