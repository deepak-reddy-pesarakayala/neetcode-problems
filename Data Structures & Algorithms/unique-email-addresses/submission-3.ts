class Solution {
    numUniqueEmails(emails: string[]): number {
        const unique = new Set<string>();
        for (const email of emails) {
            const [local, domain] = email.split("@");
            const cleanLocal = local.split("+")[0].replace(/\./g, "");
            unique.add(cleanLocal + "@" + domain);
        }
        return unique.size;
    }
}