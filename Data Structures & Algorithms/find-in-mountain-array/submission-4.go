func findInMountainArray(target int, mountainArr *MountainArray) int {
	n := mountainArr.length()

	left, right := 0, n-1

	for left < right {
		mid := left + (right-left)/2

		if mountainArr.get(mid) < mountainArr.get(mid+1) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	peak := left

	left, right = 0, peak

	for left <= right {
		mid := left + (right-left)/2
		value := mountainArr.get(mid)

		if value == target {
			return mid
		}

		if value < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	left, right = peak+1, n-1

	for left <= right {
		mid := left + (right-left)/2
		value := mountainArr.get(mid)

		if value == target {
			return mid
		}

		if value > target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}
