func splitArray(nums []int, k int) int {
	left, right := 0, 0

	for _, num := range nums {
		if num > left {
			left = num
		}
		right += num
	}

	for left < right {
		mid := left + (right-left)/2

		subarrays := 1
		currentSum := 0

		for _, num := range nums {
			if currentSum+num > mid {
				subarrays++
				currentSum = 0
			}
			currentSum += num
		}

		if subarrays <= k {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}
