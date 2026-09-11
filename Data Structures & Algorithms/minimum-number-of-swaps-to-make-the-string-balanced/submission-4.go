func minSwaps(s string) int {
	balance := 0
	minBalance := 0
    for i := 0; i < len(s); i++ {
		if s[i] == '[' {
			balance++
		} else {
			balance--
		}
        if balance < minBalance {
			minBalance = balance
		}
	}
    return (-minBalance + 1) / 2
}