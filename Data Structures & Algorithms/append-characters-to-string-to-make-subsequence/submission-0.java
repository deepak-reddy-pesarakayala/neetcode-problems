class Solution {
    public int appendCharacters(String s, String t) {
        int i = 0; 

        for (int j = 0; j < s.length() && i < t.length(); j++) {
            if (s.charAt(j) == t.charAt(i)) {
                i++;
            }
        }

        return t.length() - i;
    }
}