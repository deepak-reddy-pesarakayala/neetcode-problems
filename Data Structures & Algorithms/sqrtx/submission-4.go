func mySqrt(x int) int {
	if x < 2 {
		return x
	}

	left, right := 1, x/2
	answer := 0

	for left <= right {
		mid := left + (right-left)/2
		square := int64(mid) * int64(mid)

		if square == int64(x) {
			return mid
		}

		if square < int64(x) {
			answer = mid
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return answer
}
