class LockingTree {
    constructor(parent) {
        this.parent = parent;
        this.locked = new Array(parent.length).fill(-1);
        this.children = Array.from(
            { length: parent.length },
            () => []
        );

        for (let i = 1; i < parent.length; i++) {
            this.children[parent[i]].push(i);
        }
    }

    lock(num, user) {
        if (this.locked[num] !== -1) {
            return false;
        }

        this.locked[num] = user;
        return true;
    }

    unlock(num, user) {
        if (this.locked[num] !== user) {
            return false;
        }

        this.locked[num] = -1;
        return true;
    }

    upgrade(num, user) {
        if (this.locked[num] !== -1) {
            return false;
        }

        let p = this.parent[num];

        while (p !== -1) {
            if (this.locked[p] !== -1) {
                return false;
            }
            p = this.parent[p];
        }

        let descendants = [];
        let stack = [...this.children[num]];

        while (stack.length > 0) {
            let node = stack.pop();

            if (this.locked[node] !== -1) {
                descendants.push(node);
            }

            stack.push(...this.children[node]);
        }

        if (descendants.length === 0) {
            return false;
        }

        for (let node of descendants) {
            this.locked[node] = -1;
        }

        this.locked[num] = user;
        return true;
    }
}