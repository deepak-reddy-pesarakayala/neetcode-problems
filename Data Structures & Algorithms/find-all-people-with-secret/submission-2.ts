class Solution {
    findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
        meetings.sort((a, b) => a[2] - b[2]);

        const knows = new Array(n).fill(false);
        knows[0] = true;
        knows[firstPerson] = true;

        let i = 0;

        while (i < meetings.length) {
            const time = meetings[i][2];
            const graph: number[][] = Array.from({ length: n }, () => []);
            const people = new Set<number>();

            while (i < meetings.length && meetings[i][2] === time) {
                const [a, b] = meetings[i];

                graph[a].push(b);
                graph[b].push(a);

                people.add(a);
                people.add(b);
                i++;
            }

            const queue: number[] = [];

            for (const person of people) {
                if (knows[person]) {
                    queue.push(person);
                }
            }

            let head = 0;

            while (head < queue.length) {
                const person = queue[head++];

                for (const next of graph[person]) {
                    if (!knows[next]) {
                        knows[next] = true;
                        queue.push(next);
                    }
                }
            }
        }

        const result: number[] = [];

        for (let person = 0; person < n; person++) {
            if (knows[person]) {
                result.push(person);
            }
        }

        return result;
    }
}