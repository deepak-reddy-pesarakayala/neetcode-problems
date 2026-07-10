/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    lowestCommonAncestor(p, q) {
        let first = p;
        let second = q;
        while (first !== second) {
            first = first === null ? q : first.parent;
            second = second === null ? p : second.parent;
        }
        return first;
    }
}