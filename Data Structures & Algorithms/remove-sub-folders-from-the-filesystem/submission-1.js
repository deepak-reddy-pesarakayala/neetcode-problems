class Solution {
    /**
     * @param {string[]} folder
     * @return {string[]}
     */
    removeSubfolders(folder) {
        folder.sort();
        const result = [];
        for (const path of folder) {
            if (
                result.length === 0 ||
                !path.startsWith(result[result.length - 1] + "/")
            ) {
                result.push(path);
            }
        }
        return result;
    }
}