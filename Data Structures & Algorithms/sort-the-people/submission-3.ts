class Solution {
    sortPeople(names: string[], heights: number[]): string[] {
        const people: [string, number][] = [];
        for (let i = 0; i < names.length; i++) {
            people.push([names[i], heights[i]]);
        }
        for (let i = 0; i < people.length - 1; i++) {
            for (let j = i + 1; j < people.length; j++) {
                if (people[i][1] < people[j][1]) {
                    [people[i], people[j]] = [people[j], people[i]];
                }
            }
        }
        return people.map(person => person[0]);
    }
}