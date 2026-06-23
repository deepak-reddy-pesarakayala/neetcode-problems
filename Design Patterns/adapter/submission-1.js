class Square {
    constructor(length) {
        this.length = length;
    }

    getLength() {
        return this.length;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }
}

class SquareHole {
    constructor(length) {
        this.length = length;
    }

    canFit(square) {
        return square.getLength() <= this.length;
    }
}

class CircleToSquareAdapter {
    constructor(circle) {
        this.circle = circle;
    }

    getLength() {
        return this.circle.getRadius() * 2;
    }
}