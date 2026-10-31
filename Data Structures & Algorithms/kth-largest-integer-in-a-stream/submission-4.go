type KthLargest struct {
    k    int
    heap []int
}

func Constructor(k int, nums []int) KthLargest {
    obj := KthLargest{k: k}
    for _, num := range nums {
        obj.Add(num)
    }
    return obj
}

func (this *KthLargest) Add(val int) int {
    this.heap = append(this.heap, val)
    i := len(this.heap) - 1

    for i > 0 {
        parent := (i - 1) / 2
        if this.heap[parent] <= this.heap[i] {
            break
        }
        this.heap[parent], this.heap[i] = this.heap[i], this.heap[parent]
        i = parent
    }

    if len(this.heap) > this.k {
        this.heap[0] = this.heap[len(this.heap)-1]
        this.heap = this.heap[:len(this.heap)-1]

        i = 0
        for {
            left := 2*i + 1
            right := 2*i + 2
            smallest := i

            if left < len(this.heap) && this.heap[left] < this.heap[smallest] {
                smallest = left
            }

            if right < len(this.heap) && this.heap[right] < this.heap[smallest] {
                smallest = right
            }

            if smallest == i {
                break
            }

            this.heap[i], this.heap[smallest] = this.heap[smallest], this.heap[i]
            i = smallest
        }
    }

    return this.heap[0]
}