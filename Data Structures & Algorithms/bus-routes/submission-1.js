class Solution {
    numBusesToDestination(routes, source, target) {
        if (source === target) return 0;
        const stopToBuses = new Map();
        for (let i = 0; i < routes.length; i++) {
            for (const stop of routes[i]) {
                if (!stopToBuses.has(stop)) {
                    stopToBuses.set(stop, []);
                }
                stopToBuses.get(stop).push(i);
            }
        }
        if (!stopToBuses.has(source) || !stopToBuses.has(target)) {
            return -1;
        }
        const queue = [[source, 0]]; 
        const visitedStops = new Set([source]);
        const visitedBuses = new Set();
        let front = 0;
        while (front < queue.length) {
            const [stop, busesTaken] = queue[front++];
            const buses = stopToBuses.get(stop) || [];
            for (const bus of buses) {
                if (visitedBuses.has(bus)) continue;
                visitedBuses.add(bus);
                for (const nextStop of routes[bus]) {
                    if (nextStop === target) {
                        return busesTaken + 1;
                    }
                    if (!visitedStops.has(nextStop)) {
                        visitedStops.add(nextStop);
                        queue.push([nextStop, busesTaken + 1]);
                    }
                }
            }
        }
        return -1;
    }
}