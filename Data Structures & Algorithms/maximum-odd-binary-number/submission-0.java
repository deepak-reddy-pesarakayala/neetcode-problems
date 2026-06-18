class Solution {
    public String maximumOddBinaryNumber(String s) {
        int ones = 0;
        int zeros = 0;
        for (char ch : s.toCharArray()) {
            if (ch == '1') {
                ones++;
            } else {
                zeros++;
            }
        }
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < ones - 1; i++) {
            result.append('1');
        }
        for (int i = 0; i < zeros; i++) {
            result.append('0');
        }
        result.append('1');
        return result.toString();
    }
}