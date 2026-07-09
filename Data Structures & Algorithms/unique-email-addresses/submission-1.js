class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        const set = new Set();
        for (let email of emails) {
            let [local, domain] = email.split("@");
            local = local.split("+")[0];
            local = local.replaceAll(".", "");
            set.add(local + "@" + domain);
        }
        return set.size;
    }
}