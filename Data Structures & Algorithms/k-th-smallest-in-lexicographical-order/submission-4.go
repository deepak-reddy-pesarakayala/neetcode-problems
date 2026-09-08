func findKthNumber(n int, k int) int {
	current := 1
	k--
    for k > 0 {
		steps := countSteps(n, current, current+1)
        if steps <= k {
			k -= steps
			current++
		} else {
			k--
			current *= 10
		}
	}
    return current
}
func countSteps(n int, prefix int, nextPrefix int) int {
	steps := 0
    for prefix <= n {
		if nextPrefix <= n+1 {
			steps += nextPrefix - prefix
		} else {
			steps += n + 1 - prefix
		}
        prefix *= 10
		nextPrefix *= 10
	}
    return steps
}
