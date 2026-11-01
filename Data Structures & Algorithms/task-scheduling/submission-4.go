func leastInterval(tasks []byte, n int) int {
    freq := make([]int, 26)

    for _, task := range tasks {
        freq[task-'A']++
    }

    maxFreq := 0
    countMax := 0

    for _, f := range freq {
        if f > maxFreq {
            maxFreq = f
            countMax = 1
        } else if f == maxFreq {
            countMax++
        }
    }

    intervals := (maxFreq-1)*(n+1) + countMax

    if intervals < len(tasks) {
        return len(tasks)
    }

    return intervals
}