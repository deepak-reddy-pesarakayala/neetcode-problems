class Solution {
    removeSubfolders(folder: string[]): string[] {
        folder.sort();

        const result: string[] = [];

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