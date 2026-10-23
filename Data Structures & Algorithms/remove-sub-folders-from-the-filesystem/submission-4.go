func removeSubfolders(folder []string) []string {
    sort.Strings(folder)
    result := []string{}
    for _, path := range folder {
        if len(result) == 0 || !strings.HasPrefix(path, result[len(result)-1]+"/") {
            result = append(result, path)
        }
    }
    return result
}