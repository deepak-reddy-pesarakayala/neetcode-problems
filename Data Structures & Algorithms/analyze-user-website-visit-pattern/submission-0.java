class Solution {
    static class Visit {
        String user;
        int time;
        String site;
        Visit(String user, int time, String site) {
            this.user = user;
            this.time = time;
            this.site = site;
        }
    }
    public List<String> mostVisitedPattern(String[] username, int[] timestamp, String[] website) {
        int n = username.length;
        List<Visit> visits = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            visits.add(new Visit(username[i], timestamp[i], website[i]));
        }
        visits.sort((a, b) -> a.time - b.time);
        HashMap<String, List<String>> userMap = new HashMap<>();
        for (Visit visit : visits) {
            userMap.putIfAbsent(visit.user, new ArrayList<>());
            userMap.get(visit.user).add(visit.site);
        }
        HashMap<String, Integer> patternCount = new HashMap<>();
        for (String user : userMap.keySet()) {
            List<String> sites = userMap.get(user);
            HashSet<String> seen = new HashSet<>();
            for (int i = 0; i < sites.size(); i++) {
                for (int j = i + 1; j < sites.size(); j++) {
                    for (int k = j + 1; k < sites.size(); k++) {
                        String pattern = sites.get(i) + "#" + sites.get(j) + "#" + sites.get(k);
                        if (!seen.contains(pattern)) {
                            patternCount.put(pattern, patternCount.getOrDefault(pattern, 0) + 1);
                            seen.add(pattern);
                        }
                    }
                }
            }
        }

        String answer = "";
        int maxScore = 0;

        for (String pattern : patternCount.keySet()) {

            int score = patternCount.get(pattern);

            if (score > maxScore || (score == maxScore && pattern.compareTo(answer) < 0)) {
                maxScore = score;
                answer = pattern;
            }
        }

        return Arrays.asList(answer.split("#"));
    }
}