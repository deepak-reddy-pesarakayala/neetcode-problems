func isAlienSorted(words []string, order string) bool {
    rank := make([]int, 26)

    for i, ch := range order {
        rank[ch-'a'] = i
    }

    for i := 0; i < len(words)-1; i++ {
        w1 := words[i]
        w2 := words[i+1]

        found := false
        minLen := len(w1)
        if len(w2) < minLen {
            minLen = len(w2)
        }

        for j := 0; j < minLen; j++ {
            if w1[j] != w2[j] {
                if rank[w1[j]-'a'] > rank[w2[j]-'a'] {
                    return false
                }
                found = true
                break
            }
        }

        if !found && len(w1) > len(w2) {
            return false
        }
    }

    return true
}