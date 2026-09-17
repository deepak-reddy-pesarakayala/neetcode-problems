func numUniqueEmails(emails []string) int {
	unique := make(map[string]bool)
    for _, email := range emails {
		at := 0
        for i := 0; i < len(email); i++ {
			if email[i] == '@' {
				at = i
				break
			}
		}
        local := ""
		for i := 0; i < at; i++ {
			if email[i] == '+' {
				break
			}
			if email[i] != '.' {
				local += string(email[i])
			}
		}

		domain := email[at+1:]
		unique[local+"@"+domain] = true
	}

	return len(unique)
}