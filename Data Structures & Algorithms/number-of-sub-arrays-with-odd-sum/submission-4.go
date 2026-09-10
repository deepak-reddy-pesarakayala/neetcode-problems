func numOfSubarrays(arr []int) int {
	const mod = 1000000007

	even := 1
	odd := 0
	prefix := 0
	answer := 0

	for _, num := range arr {
		prefix += num

		if prefix%2 == 0 {
			answer = (answer + odd) % mod
			even++
		} else {
			answer = (answer + even) % mod
			odd++
		}
	}

	return answer
}
