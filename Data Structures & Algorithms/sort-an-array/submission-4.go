func sortArray(nums []int) []int {
	mergeSort(nums, 0, len(nums)-1)
	return nums
}

func mergeSort(nums []int, left int, right int) {
	if left >= right {
		return
	}

	mid := left + (right-left)/2

	mergeSort(nums, left, mid)
	mergeSort(nums, mid+1, right)

	merge(nums, left, mid, right)
}

func merge(nums []int, left int, mid int, right int) {
	temp := make([]int, right-left+1)

	i := left
	j := mid + 1
	k := 0

	for i <= mid && j <= right {
		if nums[i] <= nums[j] {
			temp[k] = nums[i]
			i++
		} else {
			temp[k] = nums[j]
			j++
		}
		k++
	}

	for i <= mid {
		temp[k] = nums[i]
		i++
		k++
	}

	for j <= right {
		temp[k] = nums[j]
		j++
		k++
	}

	for i := 0; i < len(temp); i++ {
		nums[left+i] = temp[i]
	}
}