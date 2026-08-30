class Solution {
    foreignDictionary(words: string[]): string {
        const adj = new Map<string, Set<string>>();
        const inDegree = new Map<string, number>();
        for (const word of words) {
            for (const char of word) {
                if (!adj.has(char)) {
                    adj.set(char, new Set());
                    inDegree.set(char, 0);
                }
            }
        }
        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            if (w1.length > w2.length && w1.startsWith(w2)) return "";
            const minLen = Math.min(w1.length, w2.length);
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    if (!adj.get(w1[j])!.has(w2[j])) {
                        adj.get(w1[j])!.add(w2[j]);
                        inDegree.set(w2[j], inDegree.get(w2[j])! + 1);
                    }
                    break;
                }
            }
        }
        const queue: string[] = [];
        for (const [char, degree] of inDegree.entries()) {
            if (degree === 0) queue.push(char);
        }
        const result: string[] = [];
        while (queue.length > 0) {
            const curr = queue.shift()!;
            result.push(curr);
            for (const neighbor of adj.get(curr)!) {
                inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
                if (inDegree.get(neighbor) === 0) queue.push(neighbor);
            }
        }
        return result.length === adj.size ? result.join("") : "";
    }
}