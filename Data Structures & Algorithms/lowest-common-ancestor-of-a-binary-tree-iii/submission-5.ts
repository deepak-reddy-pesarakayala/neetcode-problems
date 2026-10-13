class Solution {
    lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
        let a = p;
        let b = q;
        while (a !== b) {
            a = a === null ? q : a.parent;
            b = b === null ? p : b.parent;
        }
        return a;
    }
}