class Solution {

    public String largestGoodInteger(String num) {

        String result = "";

        for (int i = 0; i <= num.length() - 3; i++) {

            char a = num.charAt(i);
            char b = num.charAt(i + 1);
            char c = num.charAt(i + 2);

            if (a == b && b == c) {

                String current = num.substring(i, i + 3);

                if (result.equals("") || current.compareTo(result) > 0) {
                    result = current;
                }
            }
        }

        return result;
    }
}