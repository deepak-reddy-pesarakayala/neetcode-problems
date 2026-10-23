func countPrefixSuffixPairs(words []string) int {
    count := 0
    for i := 0; i < len(words); i++ {
        for j := i + 1; j < len(words); j++ {
            if len(words[i]) <= len(words[j]) && strings.HasPrefix(words[j], words[i]) && strings.HasSuffix(words[j], words[i]) {
                count++
            }
        }
    }
    return count
}