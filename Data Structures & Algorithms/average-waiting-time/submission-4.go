func averageWaitingTime(customers [][]int) float64 {
	currentTime := 0
	totalWaiting := 0

	for _, customer := range customers {
		arrival := customer[0]
		preparation := customer[1]

		if currentTime < arrival {
			currentTime = arrival
		}

		currentTime += preparation
		totalWaiting += currentTime - arrival
	}

	return float64(totalWaiting) / float64(len(customers))
}