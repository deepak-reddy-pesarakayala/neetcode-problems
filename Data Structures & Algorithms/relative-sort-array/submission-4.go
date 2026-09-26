func relativeSortArray(arr1 []int, arr2 []int) []int {
	freq := make([]int, 1001)

	for _, num := range arr1 {
		freq[num]++
	}

	result := []int{}

	for _, num := range arr2 {
		for freq[num] > 0 {
			result = append(result, num)
			freq[num]--
		}
	}

	for num := 0; num <= 1000; num++ {
		for freq[num] > 0 {
			result = append(result, num)
			freq[num]--
		}
	}

	return result
}
