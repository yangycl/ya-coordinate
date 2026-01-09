"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
class Coordinate {
    coordinate;
    constructor(coordinate) {
        this.coordinate = coordinate;
    }
    zoom(multiple) {
        return new Coordinate(this.coordinate.map(num => num * multiple));
    }
    static distance(coorArr) {
        let result = 0;
        if (coorArr[0].coordinate.length !== coorArr[1].coordinate.length)
            throw new Error(`Dimension mismatch: ${coorArr[0].coordinate.length} vs ${coorArr[1].coordinate.length}`);
        for (let i = 0; i < coorArr[0].coordinate.length; i++) {
            let unit = ((coorArr[0].coordinate[i] - coorArr[1].coordinate[i]) ** 2); //距離相減就算是負數，平方後絕對是正數
            result += unit;
        }
        return result ** 0.5;
    }
    add(value, dimension) {
        if (dimension !== undefined) {
            const newCoord = [...this.coordinate];
            newCoord[dimension] = newCoord[dimension] + value;
            return new Coordinate(newCoord);
        }
        else {
            return new Coordinate(this.coordinate.map(x => x + value));
        }
    }
    clone() {
        return new Coordinate(this.coordinate.slice());
    }
    project(n) {
        let coor = this.clone();
        coor.coordinate = coor.coordinate.slice(0, -2);
        return coor;
    }
}
exports.Coordinate = Coordinate;
const a = new Coordinate([0, 0, 0]);
const b = new Coordinate([3, 4, 0]);
console.log(Coordinate.distance([a, b])); // 5
