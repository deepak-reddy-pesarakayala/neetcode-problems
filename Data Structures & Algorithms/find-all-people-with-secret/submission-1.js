class Solution {
    findAllPeople(n, meetings, firstPerson) {
        meetings.sort((a, b) => a[2] - b[2]);

        const know = Array(n).fill(false);
        know[0] = true;
        know[firstPerson] = true;

        let i = 0;

        while (i < meetings.length) {
            const time = meetings[i][2];
            const graph = new Map();
            const people = new Set();

            while (i < meetings.length && meetings[i][2] === time) {
                const [a, b] = meetings[i];

                if (!graph.has(a)) graph.set(a, []);
                if (!graph.has(b)) graph.set(b, []);

                graph.get(a).push(b);
                graph.get(b).push(a);

                people.add(a);
                people.add(b);
                i++;
            }

            const queue = [];

            for (const person of people) {
                if (know[person]) {
                    queue.push(person);
                }
            }

            let front = 0;

            while (front < queue.length) {
                const person = queue[front++];

                for (const next of graph.get(person)) {
                    if (!know[next]) {
                        know[next] = true;
                        queue.push(next);
                    }
                }
            }
        }

        const result = [];

        for (let i = 0; i < n; i++) {
            if (know[i]) result.push(i);
        }

        return result;
    }
}