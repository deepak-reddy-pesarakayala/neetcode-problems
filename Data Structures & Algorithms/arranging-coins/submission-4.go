func arrangeCoins(n int) int {
	left := int64(1)
	right := int64(n)

	for left <= right {
		mid := left + (right-left)/2
		coins := mid * (mid + 1) / 2

		if coins == int64(n) {
			return int(mid)
		}

		if coins < int64(n) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return int(right)
}