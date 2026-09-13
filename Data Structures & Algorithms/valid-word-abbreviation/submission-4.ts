class Solution {
    validWordAbbreviation(word: string, abbr: string): boolean {
        let i = 0;
        let j = 0;
        while (i < word.length && j < abbr.length) {
            if (abbr[j] >= "a" && abbr[j] <= "z") {
                if (word[i] !== abbr[j]) return false;
                i++;
                j++;
            } else {
                if (abbr[j] === "0") return false;
                let num = 0;
                while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
                    num = num * 10 + Number(abbr[j]);
                    j++;
                }
                i += num;
            }
        }
        return i === word.length && j === abbr.length;
    }
}