func ladderLength(beginWord string, endWord string, wordList []string) int {
    words := make(map[string]bool)

    for _, word := range wordList {
        words[word] = true
    }

    if !words[endWord] {
        return 0
    }

    queue := []string{beginWord}
    visited := make(map[string]bool)
    visited[beginWord] = true

    steps := 1

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            word := queue[0]
            queue = queue[1:]

            if word == endWord {
                return steps
            }

            chars := []byte(word)

            for j := 0; j < len(chars); j++ {
                original := chars[j]

                for c := byte('a'); c <= 'z'; c++ {
                    if c == original {
                        continue
                    }

                    chars[j] = c
                    nextWord := string(chars)

                    if words[nextWord] && !visited[nextWord] {
                        visited[nextWord] = true
                        queue = append(queue, nextWord)
                    }
                }

                chars[j] = original
            }
        }

        steps++
    }

    return 0
}