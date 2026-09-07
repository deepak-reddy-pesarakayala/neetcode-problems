func reverseBits(n int) int {
	var result uint32
	value := uint32(n)
    for i := 0; i < 32; i++ {
		result = (result << 1) | (value & 1)
		value >>= 1
	}
	return int(result)
}