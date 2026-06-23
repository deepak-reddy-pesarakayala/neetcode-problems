class Square:
    def __init__(self, length):
        self.length = length

    def getLength(self):
        return self.length


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def getRadius(self):
        return self.radius


class SquareHole:
    def __init__(self, length):
        self.length = length

    def canFit(self, square):
        return square.getLength() <= self.length


class CircleToSquareAdapter(Square):
    def __init__(self, circle):
        self.circle = circle

    def getLength(self):
        return self.circle.getRadius() * 2