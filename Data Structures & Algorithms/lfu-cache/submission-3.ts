class LFUCache {
    private capacity: number;
    private minFreq: number = 0;
    private values = new Map<number, number>();
    private frequencies = new Map<number, number>();
    private freqKeys = new Map<number, Set<number>>();

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.values.has(key)) return -1;
        this.updateFrequency(key);
        return this.values.get(key)!;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return;
        if (this.values.has(key)) {
            this.values.set(key, value);
            this.updateFrequency(key);
            return;
        }
        if (this.values.size >= this.capacity) {
            const keys = this.freqKeys.get(this.minFreq)!;
            const oldestKey = keys.values().next().value!;
            keys.delete(oldestKey);
            if (keys.size === 0) this.freqKeys.delete(this.minFreq);
            this.values.delete(oldestKey);
            this.frequencies.delete(oldestKey);
        }
        this.values.set(key, value);
        this.frequencies.set(key, 1);
        if (!this.freqKeys.has(1)) this.freqKeys.set(1, new Set<number>());
        this.freqKeys.get(1)!.add(key);
        this.minFreq = 1;
    }

    private updateFrequency(key: number): void {
        const freq = this.frequencies.get(key)!;
        const keys = this.freqKeys.get(freq)!;
        keys.delete(key);
        if (keys.size === 0) {
            this.freqKeys.delete(freq);
            if (this.minFreq === freq) this.minFreq++;
        }
        const newFreq = freq + 1;
        this.frequencies.set(key, newFreq);
        if (!this.freqKeys.has(newFreq)) {
            this.freqKeys.set(newFreq, new Set<number>());
        }
        this.freqKeys.get(newFreq)!.add(key);
    }
}