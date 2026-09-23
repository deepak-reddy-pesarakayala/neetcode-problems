func maxProductDifference(nums []int) int {
	max1, max2 := 0, 0
	min1, min2 := 10001, 10001

	for _, num := range nums {
		if num > max1 {
			max2 = max1
			max1 = num
		} else if num > max2 {
			max2 = num
		}

		if num < min1 {
			min2 = min1
			min1 = num
		} else if num < min2 {
			min2 = num
		}
	}

	return max1*max2 - min1*min2
}