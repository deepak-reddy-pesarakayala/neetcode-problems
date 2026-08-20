class Solution {
    fun removeSubfolders(folder: Array<String>): List<String> {
        folder.sort()
        val result = mutableListOf<String>()
        var last = ""
        for (path in folder) {
            if (last.isEmpty() || !path.startsWith("$last/")) {
                result.add(path)
                last = path
            }
        }
        return result
    }
}