func lowestCommonAncestor(p, q *Node) *Node {
    a, b := p, q
    for a != b {
        if a == nil {
            a = q
        } else {
            a = a.Parent
        }
        if b == nil {
            b = p
        } else {
            b = b.Parent
        }
    }
    return a
}