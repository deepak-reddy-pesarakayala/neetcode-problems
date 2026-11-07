func fullBloomFlowers(flowers [][]int, people []int) []int {
    starts := make([]int, len(flowers))
    ends := make([]int, len(flowers))

    for i, flower := range flowers {
        starts[i] = flower[0]
        ends[i] = flower[1]
    }

    sort.Ints(starts)
    sort.Ints(ends)

    ans := make([]int, len(people))

    for i, time := range people {
        bloomed := sort.Search(len(starts), func(j int) bool {
            return starts[j] > time
        })

        finished := sort.Search(len(ends), func(j int) bool {
            return ends[j] >= time
        })

        ans[i] = bloomed - finished
    }

    return ans
}