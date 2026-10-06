class TimeMap {
    private map = new Map<string, [number, string][]>();

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key)!.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        const list = this.map.get(key);
        if (!list) return "";
        let left = 0;
        let right = list.length - 1;
        let result = "";
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (list[mid][0] <= timestamp) {
                result = list[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}