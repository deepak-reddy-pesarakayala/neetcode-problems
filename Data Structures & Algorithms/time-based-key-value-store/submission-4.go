type Pair struct {
	timestamp int
	value     string
}

type TimeMap struct {
	data map[string][]Pair
}

func Constructor() TimeMap {
	return TimeMap{
		data: make(map[string][]Pair),
	}
}

func (this *TimeMap) Set(key string, value string, timestamp int) {
	this.data[key] = append(this.data[key], Pair{
		timestamp: timestamp,
		value:     value,
	})
}

func (this *TimeMap) Get(key string, timestamp int) string {
	values, exists := this.data[key]

	if !exists {
		return ""
	}

	left, right := 0, len(values)-1
	answer := ""

	for left <= right {
		mid := left + (right-left)/2

		if values[mid].timestamp <= timestamp {
			answer = values[mid].value
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return answer
}
