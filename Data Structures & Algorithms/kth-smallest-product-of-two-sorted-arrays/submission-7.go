func kthSmallestProduct(nums1 []int, nums2 []int, k int64) int64 {
	left := int64(-10000000000)
	right := int64(10000000000)

	for left < right {
		mid := left + (right-left)/2

		if countProducts(nums1, nums2, mid) >= k {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}

func countProducts(a []int, b []int, target int64) int64 {
	var count int64

	for _, x := range a {
		if x == 0 {
			if target >= 0 {
				count += int64(len(b))
			}
		} else if x > 0 {
			limit := floorDiv(target, int64(x))
			count += int64(upperBound(b, limit))
		} else {
			limit := ceilDiv(target, int64(x))
			count += int64(len(b) - lowerBound(b, limit))
		}
	}

	return count
}

func lowerBound(nums []int, target int64) int {
	left, right := 0, len(nums)

	for left < right {
		mid := left + (right-left)/2

		if int64(nums[mid]) >= target {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}

func upperBound(nums []int, target int64) int {
	left, right := 0, len(nums)

	for left < right {
		mid := left + (right-left)/2

		if int64(nums[mid]) <= target {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return left
}

func floorDiv(a, b int64) int64 {
	q := a / b
	r := a % b

	if r != 0 && ((a < 0) != (b < 0)) {
		q--
	}

	return q
}

func ceilDiv(a, b int64) int64 {
	q := a / b
	r := a % b

	if r != 0 && ((a < 0) == (b < 0)) {
		q++
	}

	return q
}
