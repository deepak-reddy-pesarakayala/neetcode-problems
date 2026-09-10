func minSubarray(nums []int, p int) int {
	total := 0
    for _, num := range nums {
		total = (total + num) % p
	}
    if total == 0 {
		return 0
	}
    rem := total
	latest := make(map[int]int)
	latest[0] = -1
    prefix := 0
	answer := len(nums)
    for i, num := range nums {
 	   prefix = (prefix + num) % p
       target := (prefix - rem + p) % p
        if index, exists := latest[target]; exists {
			length := i - index
			if length < answer {
				answer = length
			}
		}

		latest[prefix] = i
	}

	if answer == len(nums) {
		return -1
	}

	return answer
}