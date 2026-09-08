func minEnd(n int, x int) int64 {
	result := int64(x)
	remaining := int64(n - 1)
	bit := int64(1)
    for remaining > 0 {
		if result&bit == 0 {
			if remaining&1 == 1 {
				result |= bit
			}
			remaining >>= 1
		}
		bit <<= 1
	}
    return result
}
