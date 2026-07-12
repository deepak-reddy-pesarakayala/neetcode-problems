class Solution {
    partition(s) {
        const result = [];
        const backtrack = (start, current) => {
            if (start === s.length) {
                result.push([...current]);
                return;
            }
            for (let end = start; end < s.length; end++) {
                if (this.isPalindrome(s, start, end)) {
                    current.push(s.substring(start, end + 1));
                    backtrack(end + 1, current);
                    current.pop();
                }
            }
        };
        backtrack(0, []);
        return result;
    }
    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}