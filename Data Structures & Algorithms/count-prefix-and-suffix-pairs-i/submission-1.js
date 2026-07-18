class Solution {
    countPrefixSuffixPairs(words) {
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (this.isPrefixAndSuffix(words[i], words[j])) {
                    count++;
                }
            }
        }
        return count;
    }
    isPrefixAndSuffix(str1, str2) {
        return str2.startsWith(str1) && str2.endsWith(str1);
    }
}