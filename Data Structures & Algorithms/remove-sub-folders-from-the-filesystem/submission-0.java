class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder);

        List<String> result = new ArrayList<>();

        for (String path : folder) {
            if (result.isEmpty()) {
                result.add(path);
            } else {
                String last = result.get(result.size() - 1);

                if (!path.startsWith(last + "/")) {
                    result.add(path);
                }
            }
        }

        return result;
    }
}
        
