class Item {
    value: number;
    index: number;

    constructor(value: number, index: number) {
        this.value = value;
        this.index = index;
    }
}

class MinHeap {
    heap: Item[] = [];

    compare(a: Item, b: Item): boolean {
        if (a.value === b.value) {
            return a.index < b.index;
        }
        return a.value < b.value;
    }

    push(item: Item): void {
        this.heap.push(item);
        let i = this.heap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);

            if (!this.compare(this.heap[i], this.heap[parent])) {
                break;
            }

            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    pop(): Item {
        const result = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (left < this.heap.length &&
                    this.compare(this.heap[left], this.heap[smallest])) {
                    smallest = left;
                }

                if (right < this.heap.length &&
                    this.compare(this.heap[right], this.heap[smallest])) {
                    smallest = right;
                }

                if (smallest === i) {
                    break;
                }

                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }

        return result;
    }
}

class Solution {
    getFinalState(nums: number[], k: number, multiplier: number): number[] {
        const minHeap = new MinHeap();

        for (let i = 0; i < nums.length; i++) {
            minHeap.push(new Item(nums[i], i));
        }

        for (let i = 0; i < k; i++) {
            const item = minHeap.pop();

            item.value *= multiplier;
            nums[item.index] = item.value;

            minHeap.push(item);
        }

        return nums;
    }
}