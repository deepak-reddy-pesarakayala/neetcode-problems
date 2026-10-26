class Solution {
    partition(s: string): string[][] {
        const result: string[][] = [];
        const current: string[] = [];

        const isPalindrome = (str: string): boolean => {
            let left = 0;
            let right = str.length - 1;

            while (left < right) {
                if (str[left] !== str[right]) {
                    return false;
                }
                left++;
                right--;
            }

            return true;
        };

        const backtrack = (start: number): void => {
            if (start === s.length) {
                result.push([...current]);
                return;
            }

            for (let end = start + 1; end <= s.length; end++) {
                const sub = s.substring(start, end);

                if (isPalindrome(sub)) {
                    current.push(sub);
                    backtrack(end);
                    current.pop();
                }
            }
        };

        backtrack(0);
        return result;
    }
}