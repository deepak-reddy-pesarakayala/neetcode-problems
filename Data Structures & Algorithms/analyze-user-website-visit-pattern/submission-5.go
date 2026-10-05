type Visit struct {
	user string
	time int
	web  string
}

func mostVisitedPattern(username []string, timestamp []int, website []string) []string {
	n := len(username)

	visits := make([]Visit, n)
	for i := 0; i < n; i++ {
		visits[i] = Visit{username[i], timestamp[i], website[i]}
	}

	sort.Slice(visits, func(i, j int) bool {
		return visits[i].time < visits[j].time
	})

	userWebsites := make(map[string][]string)

	for _, visit := range visits {
		userWebsites[visit.user] = append(userWebsites[visit.user], visit.web)
	}

	score := make(map[string]int)
	best := ""

	for _, sites := range userWebsites {
		if len(sites) < 3 {
			continue
		}

		seen := make(map[string]bool)

		for i := 0; i < len(sites)-2; i++ {
			for j := i + 1; j < len(sites)-1; j++ {
				for k := j + 1; k < len(sites); k++ {
					key := sites[i] + "#" + sites[j] + "#" + sites[k]

					if !seen[key] {
						seen[key] = true
						score[key]++

						if best == "" || score[key] > score[best] ||
							(score[key] == score[best] && key < best) {
							best = key
						}
					}
				}
			}
		}
	}

	result := []string{}
	current := ""

	for i := 0; i < len(best); i++ {
		if best[i] == '#' {
			result = append(result, current)
			current = ""
		} else {
			current += string(best[i])
		}
	}

	result = append(result, current)

	return result
}
