func wordBreak(s string, wordDict []string) []string {
    wordSet := make(map[string]bool)
    for _, word := range wordDict {
        wordSet[word] = true
    }

    memo := make(map[int][]string)

    var backtrack func(int) []string
    backtrack = func(start int) []string {
        if start == len(s) {
            return []string{""}
        }

        if result, exists := memo[start]; exists {
            return result
        }

        var ans []string

        for end := start + 1; end <= len(s); end++ {
            word := s[start:end]

            if wordSet[word] {
                suffixes := backtrack(end)

                for _, suffix := range suffixes {
                    if suffix == "" {
                        ans = append(ans, word)
                    } else {
                        ans = append(ans, word+" "+suffix)
                    }
                }
            }
        }

        memo[start] = ans
        return ans
    }

    return backtrack(0)
}