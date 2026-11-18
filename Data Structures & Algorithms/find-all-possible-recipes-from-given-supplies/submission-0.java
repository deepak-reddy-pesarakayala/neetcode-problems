class Solution {
    public List<String> findAllRecipes(List<String> recipes, List<List<String>> ingredients, List<String> supplies) {
        Map<String, List<String>> graph = new HashMap<>();
        Map<String, Integer> inDegree = new HashMap<>();
        Set<String> recipeSet = new HashSet<>(recipes);
        for (int i = 0; i < recipes.size(); i++) {
            String recipe = recipes.get(i);
            inDegree.put(recipe, 0);
            for (String ing : ingredients.get(i)) {
                graph.putIfAbsent(ing, new ArrayList<>());
                graph.get(ing).add(recipe);
                inDegree.put(recipe, inDegree.get(recipe) + 1);
            }
        }
        Queue<String> queue = new LinkedList<>();
        for (String s : supplies) {
            queue.offer(s);
        }
        List<String> result = new ArrayList<>();
        while (!queue.isEmpty()) {
            String curr = queue.poll();
            if (recipeSet.contains(curr)) {
                result.add(curr);
            }
            if (graph.containsKey(curr)) {
                for (String neighbor : graph.get(curr)) {
                    inDegree.put(neighbor, inDegree.get(neighbor) - 1);
                    if (inDegree.get(neighbor) == 0) {
                        queue.offer(neighbor);
                    }
                }
            }
        }
        return result;
    }

    public List<String> findAllRecipes(String[] recipes, List<List<String>> ingredients, String[] supplies) {
        return findAllRecipes(Arrays.asList(recipes), ingredients, Arrays.asList(supplies));
    }
}