func distributeCandies(n int, limit int) int64 {
	result := int64(n+2) * int64(n+1) / 2
    if n >= limit+1 {
		x := n - (limit + 1)
		result -= 3 * int64(x+2) * int64(x+1) / 2
	}
    if n >= 2*(limit+1) {
		x := n - 2*(limit+1)
		result += 3 * int64(x+2) * int64(x+1) / 2
	}
    if n >= 3*(limit+1) {
		x := n - 3*(limit+1)
		result -= int64(x+2) * int64(x+1) / 2
	}
    return result
}
