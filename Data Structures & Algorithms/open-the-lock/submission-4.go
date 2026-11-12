func openLock(deadends []string, target string) int {
    dead := make(map[string]bool)

    for _, d := range deadends {
        dead[d] = true
    }

    if dead["0000"] {
        return -1
    }

    queue := []string{"0000"}
    visited := map[string]bool{"0000": true}
    turns := 0

    for len(queue) > 0 {
        size := len(queue)

        for i := 0; i < size; i++ {
            curr := queue[0]
            queue = queue[1:]

            if curr == target {
                return turns
            }

            for j := 0; j < 4; j++ {
                digits := []byte(curr)

                digits[j] = byte((int(digits[j]-'0') + 1) % 10 + '0')
                next := string(digits)

                if !dead[next] && !visited[next] {
                    visited[next] = true
                    queue = append(queue, next)
                }

                digits = []byte(curr)
                digits[j] = byte((int(digits[j]-'0') + 9) % 10 + '0')
                next = string(digits)

                if !dead[next] && !visited[next] {
                    visited[next] = true
                    queue = append(queue, next)
                }
            }
        }

        turns++
    }

    return -1
}