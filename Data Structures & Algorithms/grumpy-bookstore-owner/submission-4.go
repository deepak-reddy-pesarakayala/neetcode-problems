func maxSatisfied(customers []int, grumpy []int, minutes int) int {
	base := 0
	window := 0
	maxWindow := 0

	for i := 0; i < len(customers); i++ {
		if grumpy[i] == 0 {
			base += customers[i]
		} else {
			window += customers[i]
		}

		if i >= minutes {
			if grumpy[i-minutes] == 1 {
				window -= customers[i-minutes]
			}
		}

		if window > maxWindow {
			maxWindow = window
		}
	}

	return base + maxWindow
}
