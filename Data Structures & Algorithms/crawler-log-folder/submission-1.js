class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let stack = [];
        for (let log of logs) {
            if (log === '../') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else if (log !== './') {
                stack.push(log);
            }
        }
        return stack.length;
    }
}