class LockingTree {
    private parent: number[];
    private children: number[][];
    private lockedBy: number[];

    constructor(parent: number[]) {
        this.parent = parent;
        this.children = Array.from({ length: parent.length }, () => []);
        this.lockedBy = new Array(parent.length).fill(0);

        for (let i = 1; i < parent.length; i++) {
            this.children[parent[i]].push(i);
        }
    }

    lock(num: number, user: number): boolean {
        if (this.lockedBy[num] !== 0) return false;
        this.lockedBy[num] = user;
        return true;
    }

    unlock(num: number, user: number): boolean {
        if (this.lockedBy[num] !== user) return false;
        this.lockedBy[num] = 0;
        return true;
    }

    upgrade(num: number, user: number): boolean {
        if (this.lockedBy[num] !== 0) return false;

        let ancestor = this.parent[num];
        while (ancestor !== -1) {
            if (this.lockedBy[ancestor] !== 0) return false;
            ancestor = this.parent[ancestor];
        }

        const lockedDescendants: number[] = [];
        const stack = [...this.children[num]];

        while (stack.length > 0) {
            const node = stack.pop()!;

            if (this.lockedBy[node] !== 0) {
                lockedDescendants.push(node);
            }

            for (const child of this.children[node]) {
                stack.push(child);
            }
        }

        if (lockedDescendants.length === 0) return false;

        for (const node of lockedDescendants) {
            this.lockedBy[node] = 0;
        }

        this.lockedBy[num] = user;
        return true;
    }
}