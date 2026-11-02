func findLeastNumOfUniqueInts(arr []int, k int) int {
    freq := make(map[int]int)

    for _, num := range arr {
        freq[num]++
    }

    counts := make([]int, 0, len(freq))

    for _, count := range freq {
        counts = append(counts, count)
    }

    sort.Ints(counts)

    unique := len(counts)

    for _, count := range counts {
        if k >= count {
            k -= count
            unique--
        } else {
            break
        }
    }

    return unique
}