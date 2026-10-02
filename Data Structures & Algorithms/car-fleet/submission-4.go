func carFleet(target int, position []int, speed []int) int {
	n := len(position)

	cars := make([][2]int, n)
	for i := 0; i < n; i++ {
		cars[i] = [2]int{position[i], speed[i]}
	}

	sort.Slice(cars, func(i, j int) bool {
		return cars[i][0] < cars[j][0]
	})

	fleets := 0
	maxTime := 0.0

	for i := n - 1; i >= 0; i-- {
		time := float64(target-cars[i][0]) / float64(cars[i][1])

		if time > maxTime {
			fleets++
			maxTime = time
		}
	}

	return fleets
}
