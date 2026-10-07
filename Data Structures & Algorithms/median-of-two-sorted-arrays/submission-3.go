func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}

	m, n := len(nums1), len(nums2)
	left, right := 0, m
	half := (m + n + 1) / 2

	for left <= right {
		i := left + (right-left)/2
		j := half - i

		left1 := -1000000001
		right1 := 1000000001
		left2 := -1000000001
		right2 := 1000000001

		if i > 0 {
			left1 = nums1[i-1]
		}
		if i < m {
			right1 = nums1[i]
		}
		if j > 0 {
			left2 = nums2[j-1]
		}
		if j < n {
			right2 = nums2[j]
		}

		if left1 <= right2 && left2 <= right1 {
			if (m+n)%2 == 1 {
				if left1 > left2 {
					return float64(left1)
				}
				return float64(left2)
			}

			maxLeft := left1
			if left2 > maxLeft {
				maxLeft = left2
			}

			minRight := right1
			if right2 < minRight {
				minRight = right2
			}

			return float64(maxLeft+minRight) / 2.0
		}

		if left1 > right2 {
			right = i - 1
		} else {
			left = i + 1
		}
	}

	return 0.0
}
