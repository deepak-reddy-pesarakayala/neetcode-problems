func findErrorNums(nums []int) []int {
	freq := make([]int, len(nums)+1)

	for _, num := range nums {
		freq[num]++
	}

	duplicate := 0
	missing := 0

	for i := 1; i <= len(nums); i++ {
		if freq[i] == 2 {
			duplicate = i
		}

		if freq[i] == 0 {
			missing = i
		}
	}

	return []int{duplicate, missing}
}