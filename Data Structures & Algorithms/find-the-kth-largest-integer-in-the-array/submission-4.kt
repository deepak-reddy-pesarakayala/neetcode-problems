class Solution {
    fun kthLargestNumber(nums: Array<String>, k: Int): String {
        nums.sortWith(Comparator { a, b ->
            if (a.length != b.length) {
                b.length.compareTo(a.length)
            } else {
                b.compareTo(a)
            }
        })
        return nums[k - 1]
    }
}