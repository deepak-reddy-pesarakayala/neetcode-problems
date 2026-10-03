class FreqStack {
    private freq = new Map<number, number>();
    private groups = new Map<number, number[]>();
    private maxFreq = 0;

    push(val: number): void {
        const f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);
        if (!this.groups.has(f)) {
            this.groups.set(f, []);
        }
        this.groups.get(f)!.push(val);
        this.maxFreq = Math.max(this.maxFreq, f);
    }

    pop(): number {
        const group = this.groups.get(this.maxFreq)!;
        const val = group.pop()!;
        const f = this.freq.get(val)! - 1;
        this.freq.set(val, f);
        if (group.length === 0) {
            this.groups.delete(this.maxFreq);
            this.maxFreq--;
        }
        return val;
    }
}