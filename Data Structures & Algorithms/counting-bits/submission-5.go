func countBits(n int) []int {
	output := make([]int, n+1)
    for i := 1; i <= n; i++ {
		output[i] = output[i>>1] + (i & 1)
	}
	return output
}
