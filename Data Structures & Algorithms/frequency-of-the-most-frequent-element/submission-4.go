func maxFrequency(nums []int, k int) int {
	sort.Ints(nums)
    left := 0
	sum := int64(0)
	answer := 1
    for right := 0; right < len(nums); right++ {
		sum += int64(nums[right])
        for int64(nums[right])*int64(right-left+1)-sum > int64(k) {
			sum -= int64(nums[left])
			left++
		}
        length := right - left + 1
		if length > answer {
			answer = length
		}
	}
    return answer
}

