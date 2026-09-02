func maxArea(height []int) int {
	left := 0
	right := len(height) - 1
	maxWater := 0
    for left < right {
		width := right - left
		h := height[left]
		if height[right] < h {
			h = height[right]
		}
        area := width * h
        if area > maxWater {
			maxWater = area
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
    return maxWater
}