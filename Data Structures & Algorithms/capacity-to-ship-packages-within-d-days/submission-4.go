func shipWithinDays(weights []int, days int) int {
	left := 0
	right := 0

	for _, weight := range weights {
		if weight > left {
			left = weight
		}
		right += weight
	}

	for left < right {
		mid := left + (right-left)/2

		requiredDays := 1
		currentWeight := 0

		for _, weight := range weights {
			if currentWeight+weight > mid {
				requiredDays++
				currentWeight = 0
			}
			currentWeight += weight
		}

		if requiredDays <= days {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}