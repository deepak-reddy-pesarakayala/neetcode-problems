class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        const stack = [];
        const remove = new Set();
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(i);
            } else if (s[i] === ')') {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    remove.add(i);
                }
            }
        }
        while (stack.length > 0) {
            remove.add(stack.pop());
        }
        let result = "";
        for (let i = 0; i < s.length; i++) {
            if (!remove.has(i)) {
                result += s[i];
            }
        }
        return result;
    }
}