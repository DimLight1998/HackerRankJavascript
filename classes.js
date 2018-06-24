class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        let ret = 0;
        for (let side of this.sides) ret += side;
        return ret;
    }
}