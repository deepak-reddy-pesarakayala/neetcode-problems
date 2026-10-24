func sumPrefixScores(words []string) []int {
    count := make(map[string]int)
    for _, word := range words {
        prefix := ""
        for _, ch := range word {
            prefix += string(ch)
            count[prefix]++
        }
    }
    result := make([]int, len(words))
    for i, word := range words {
        prefix := ""
        for _, ch := range word {
            prefix += string(ch)
            result[i] += count[prefix]
        }
    }
    return result
}