class Solution {

    public int countCharacters(String[] words, String chars) {

        HashMap<Character, Integer> map = new HashMap<>();

        for (char ch : chars.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        int sum = 0;

        for (String word : words) {

            HashMap<Character, Integer> temp = new HashMap<>(map);
            boolean good = true;

            for (char ch : word.toCharArray()) {

                if (!temp.containsKey(ch) || temp.get(ch) == 0) {
                    good = false;
                    break;
                }

                temp.put(ch, temp.get(ch) - 1);
            }

            if (good) {
                sum += word.length();
            }
        }

        return sum;
    }
}